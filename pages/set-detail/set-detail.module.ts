import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetDetailPage } from './set-detail';

@NgModule({
  declarations: [
    SetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SetDetailPage),
  ],
})
export class SetDetailPageModule {}
