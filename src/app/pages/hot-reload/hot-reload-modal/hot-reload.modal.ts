import { Component, Input, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { HotReloadItem } from "../hot-reload.page";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: './app-hot-reload-modal',
  templateUrl: './hot-reload.modal.html',
  styleUrls: ['./hot-reload.modal.scss']
})
export class HotReloadModal implements OnInit {

  @Input() item: HotReloadItem;
  form: FormGroup;

  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.item.title, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      description: new FormControl(this.item.description, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    })
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async submit() {
    if (this.form.invalid) {
      return
    }

    const alert = await this.alertCtrl.create({
      header: 'Edit Item',
      message: 'Are you sure you want to edit this item?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.modalCtrl.dismiss(this.form.value, 'submit');
          }
        }
      ]
    });
    alert.present();
  }
}