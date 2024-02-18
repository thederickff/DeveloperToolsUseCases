import { Component, OnInit } from "@angular/core";
import { switchMap } from "rxjs";
import { StorageService } from "src/app/services/storage.service";

interface AuthUser {
  userId: string;
  displayName: string;
  role: 'viewer' | 'admin';
}

@Component({
  selector: 'app-storage-control',
  templateUrl: './storage-control.page.html',
  styleUrls: ['./storage-control.page.scss']
})
export class StorageControlPage implements OnInit {

  authUser: AuthUser;
  profileType: 'type01' | 'type02';

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.storageService.get<AuthUser>('has.example.data').subscribe(hasExampleData => {
      if (hasExampleData) {
        this.fetchExampleData();
      } else {
        this.persistExampleData().subscribe(() => {
          this.fetchExampleData();
        });
      }
    });
  }

  private fetchExampleData() {
    this.storageService.get<AuthUser>('auth.user').pipe(
      switchMap(authUser => {
        this.authUser = authUser;

        return this.storageService.get<'type01' | 'type02'>('currentProfileType');
      })
    ).subscribe(profileType => {
      if (profileType) {
        this.profileType = profileType;
      }
    });
  }

  private persistExampleData() {
    return this.storageService.set<boolean>('has.example.data', true).pipe(
      switchMap(() => this.storageService.set<AuthUser>('auth.user', {
        userId: 'e4b430a9-40fe-e97b05122560',
        displayName: 'John Doe',
        role: 'viewer'
      })),
      switchMap(() => this.storageService.set('dt.storage.triggers.59d3a-586b23d-b79d2-0bb22b29a8a7bcc', {})),
      switchMap(() => this.storageService.set('deviceSerialNumber', '57be7e5462b5218c4f012da93a4ab8d5')),
      switchMap(() => this.storageService.set('currentProfileId', '6f7935fd517fbc209ee0e8b5645aa896')),
      switchMap(() => this.storageService.set('launchCount', 30)),
      switchMap(() => this.storageService.set('most_recently_seen_localization_language', 'en-US')),
      switchMap(() => this.storageService.set('dt.storage.sessionId.547b7-1632c8-b2466fbd-6ab5cdb-e6a6d1', { v: { g: "e7fa-5e08-bb29198-a37f565-304-909228f", e: 2708295713741, c: 3708293904392, l: 4708293913741 }})),
      switchMap(() => this.storageService.set('dt.storage.cc.547b7-1632c8-b2466fbd-6ab5cdb-e6a6d1', { v: []})),
      switchMap(() => this.storageService.set('checkedLimitedAccessUserIds', ["83dc6b4c-234210a9-0236681ca8c-0e808"])),
      switchMap(() => this.storageService.set('firstLaunchTimestamp', 1671664705910)),
      switchMap(() => this.storageService.set('currentProfileTime', 1708293912747)),
      switchMap(() => this.storageService.set('primary_profile_external_id', '3eb8bc37a6345ab34e3d52dd55944914')),
      switchMap(() => this.storageService.set('currentProfileType', 'type01')),
      switchMap(() => this.storageService.set('consentChoices', { allowFunctionalCookies: true, allowPerformanceCookies:true, allowTargetingCookies: true })),
      switchMap(() => this.storageService.set('application.ClientDevice.mute', 'off')),
      switchMap(() => this.storageService.set('application.ClientDevice.persistedVolume', '0.9')),
      switchMap(() => this.storageService.set('primaryProfileName', 'John Doe')),
      switchMap(() => this.storageService.set('primaryProfileId', '4c2a904bafb-a06591-225113ad-17b5cec')),
      switchMap(() => this.storageService.set('playbackMarkers', {})),
    );
  }
}