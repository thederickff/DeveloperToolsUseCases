import { NgModule } from "@angular/core";
import { LearnCssPage } from "./learn-css.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: LearnCssPage
  }
];

@NgModule({
  declarations: [LearnCssPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class LearnCssPageModule { }