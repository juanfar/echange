import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceInterface } from '../../interfaces/device';
import { Device } from '@ionic-native/device';

import { User } from "../../interfaces/user";
import { UserService } from "../../services/user.service";

import { IntroPage } from '../intro/intro';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  deviceInfo: DeviceInterface = {};

  newUser = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private device: Device,
              private _userService: UserService) {
              
    this.deviceInfo.id = this.device.uuid;
    this.newUser = {
      isLogged: true,
      deviceId: this.deviceInfo.id,
      picture: 'https://firebasestorage.googleapis.com/v0/b/echange-cd725.appspot.com/o/books%2Fuser.png?alt=media&token=8189081c-99c6-4a35-926e-3e88269c3f88',
      country: 'Colombia'
    };
  }

  ionViewDidLoad() {
    
  }

  userForm() {
    console.log('newUser', this.newUser);
    this._userService.addUser(this.newUser);
    this.newUser = {};
    this.navCtrl.push(IntroPage);
  }
  

}
