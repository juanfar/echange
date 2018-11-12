import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegLogPage } from './reg-log';

@NgModule({
  declarations: [
    RegLogPage,
  ],
  imports: [
    IonicPageModule.forChild(RegLogPage),
  ],
})
export class RegLogPageModule {}
