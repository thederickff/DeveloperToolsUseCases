import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  useCases = [
    {
      path: 'custom-benefits',
      title: 'Customize for Benefits',
      icon: 'color-palette-outline',
      disabled: true
    },
    {
      path: 'hot-reload',
      title: 'Hot Reload',
      icon: 'reload-outline'
    },
    {
      path: 'realtime-change',
      title: 'Realtime Change',
      icon: 'color-wand-outline'
    },
    {
      path: 'another-machine',
      title: 'Another Machine',
      icon: 'people-circle-outline',
      disabled: true
    },
    {
      path: 'learn-css',
      title: 'Learn CSS',
      icon: 'school-outline'
    },
    {
      path: 'change-suggestion',
      title: 'Suggest Change',
      icon: 'flask-outline',
      disabled: true
    },
    {
      path: 'storage-control',
      title: 'Storage Control',
      icon: 'folder-outline'
    },
    {
      path: 'inspect-network',
      title: 'Inspect Network',
      icon: 'globe-outline',
      disabled: true
    },
    {
      path: 'discover-tech',
      title: 'Discover Technologies',
      icon: 'compass-outline',
      disabled: true
    },
  ]

  constructor() {}

}
