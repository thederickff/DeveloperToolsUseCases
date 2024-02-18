import { NgModule } from "@angular/core";
import { StorageControlPage } from "./storage-control.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: StorageControlPage
  }
];

@NgModule({
  declarations: [StorageControlPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class StorageControlPageModule { }