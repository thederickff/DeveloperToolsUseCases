import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertController, LoadingController } from "@ionic/angular";
import { appCatchError, appShowLoading } from "src/app/app.functions";
import { NativeService } from "src/app/services/native.service";

@Component({
  selector: 'app-realtime-change',
  templateUrl: './realtime-change.page.html',
  styleUrls: ['./realtime-change.page.scss']
})
export class RealtimeChangePage implements OnInit {

  form: FormGroup;
  searchDone = false;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private nativeService: NativeService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      field: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    })
  }

  openQRCodeScanner() {
    this.nativeService.openQRCodeScanner().subscribe({
      next: res => {
        const text = res || 'mock-of-qrcode-text';
        this.form.get('field').patchValue(text);
      },
      error: error => {
        appCatchError(this.alertCtrl)(error);
      }
    });
  }

  async submit() {
    if (this.form.invalid) {
      return;
    }

    const loading = await appShowLoading(this.loadingCtrl);
    setTimeout(() => {
      loading.dismiss();
      this.searchDone = true;
    }, 1000);
  }
}