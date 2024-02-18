import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { HotReloadModal } from "./hot-reload-modal/hot-reload.modal";

export interface HotReloadItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-hot-reload',
  templateUrl: './hot-reload.page.html',
  styleUrls: ['./hot-reload.page.scss']
})
export class HotReloadPage {

  items: HotReloadItem[] = [
    {
      title: 'Item One',
      description: 'Description of the item one'
    },
    {
      title: 'Item Two',
      description: 'Description of the item two'
    },
    {
      title: 'Item Three',
      description: 'Description of the item three'
    },
    {
      title: 'Item Four',
      description: 'Description of the item four'
    },
    {
      title: 'Item Five',
      description: 'Description of the item five'
    },
    {
      title: 'Item Six',
      description: 'Description of the item six'
    },
    {
      title: 'Item Seven',
      description: 'Description of the item seven'
    },
    {
      title: 'Item Eight',
      description: 'Description of the item eight'
    },
    {
      title: 'Item Nine',
      description: 'Description of the item nine'
    }
  ];

  constructor(
    private modalCtrl: ModalController
  ) {}

  async openModal(item: HotReloadItem, index: number) {
    const modal = await this.modalCtrl.create({
      component: HotReloadModal,
      componentProps: { item }
    });
    modal.present();

    const res = await modal.onDidDismiss();

    if (res.role === 'submit') {
      this.items[index].title = res.data.title;
      this.items[index].description = res.data.description;
    }
  }
}