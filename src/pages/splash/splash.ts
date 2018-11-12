import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../services/user.service";
import { DeviceInterface } from '../../interfaces/device';

import { Device } from '@ionic-native/device';
import { User } from '../../interfaces/user';

import { RegLogPage } from "../reg-log/reg-log";
import { LoginPage } from "../login/login";
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  user: User;
  deviceInfo: DeviceInterface = {};
  deviceId: string;
  isLogged: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private device: Device,
              private _userService: UserService) {
  }

  ionViewDidLoad() {
    this.deviceInfo.id = this.device.uuid;
    console.log('this.deviceInfo.id', this.deviceInfo.id);
    this._userService.getByDevice(this.deviceInfo.id).subscribe(user => {
      this.user = user[0];
        try {
          this.deviceId = this.user.deviceId;
          this.isLogged = this.user.isLogged;
            if (this.isLogged == true) this.navCtrl.push(HomePage);/*console.log('ir a home page');*/
            else this.navCtrl.push(LoginPage);/*console.log('ir a login page');*/
        } catch (err) {
            this.navCtrl.push(RegLogPage);/*console.log('ir a reg page');*/
        }
    });
  }

  

}
