import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { Platform } from "@ionic/angular";
import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';
import { switchMap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class NativeService {

  private mIsNative = false;

  constructor(
    private platform: Platform
  ) {
    if (this.platform.is('capacitor')) {
      this.mIsNative = true;
    }
  }

  openQRCodeScanner(): Observable<string> {
    if (this.mIsNative) {
      return from(BarcodeScanner.checkPermission({ force: true })).pipe(
        switchMap(permission => {
          if (permission.denied) {
            throw new Error("ScannerCameraDenied");
          }

          return from(BarcodeScanner.checkPermission({ force: true }));
        }),
        switchMap(permission => {
          if (!permission.granted) {
            throw new Error("ScannerCameraDenied");
          }

          return from(new Promise(async resolve => {
            const body = document.querySelector('body');

            const backButtonContainer = document.createElement('div');
            backButtonContainer.className = 'scanner-back-button-container';

            const backButton = document.createElement('ion-button');
            backButton.setAttribute('expand', 'block');
            backButton.setAttribute('color', 'light');
            backButton.textContent = 'Return';
            backButton.onclick = () => {
              stopScan();
            };
            backButtonContainer.appendChild(backButton);

            const stopScan = () => {
              BarcodeScanner.stopScan();
              BarcodeScanner.showBackground();
              body.classList.remove('scanner-active');
              body.removeChild(backButtonContainer);
            };

            const startScan = async () => {
              body.classList.add('scanner-active');
              body.appendChild(backButtonContainer);

              BarcodeScanner.hideBackground();
              return await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE]  })
            };

            document.addEventListener('backbutton', stopScan);
            const result = await startScan();
            document.removeEventListener('backbutton', stopScan);
            stopScan();

            if (result.hasContent) {
              resolve(result.content);
            }
          }) as Promise<string>);
        })
      );
    }

    return of('');
  }
}