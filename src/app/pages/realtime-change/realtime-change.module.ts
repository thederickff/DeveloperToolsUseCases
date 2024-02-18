import { NgModule } from "@angular/core";
import { RealtimeChangePage } from "./realtime-change.page";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: RealtimeChangePage
  }
];

@NgModule({
  declarations: [RealtimeChangePage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class RealtimeChangePageModule { }