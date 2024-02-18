import { NgModule } from "@angular/core";
import { HotReloadPage } from "./hot-reload.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { HotReloadModal } from "./hot-reload-modal/hot-reload.modal";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: HotReloadPage
  }
];

@NgModule({
  declarations: [
    HotReloadPage,
    HotReloadModal
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class HotReloadPageModule { }