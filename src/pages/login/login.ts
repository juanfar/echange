import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { UserService } from '../../services/user.service';
import { DeviceInterface } from '../../interfaces/device';


import { Device } from '@ionic-native/device';
import { User } from '../../interfaces/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  deviceInfo: DeviceInterface = {};

  logUser = {
    username: '',
    chiave: ''
  };
  users;
  isLogged = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _userService: UserService,
              private device: Device) {
  }

  ionViewDidLoad() {
    this.deviceInfo.id = this.device.uuid;
  }

  loginForm() {
    this._userService.getUsers().subscribe(users => {
      this.users = users;

      console.log('logUser', this.logUser);
      console.log('users', this.users);

      for (var k in this.users) {
        if (this.users[k]['username'] == this.logUser.username && this.users[k]['chiave'] == this.logUser.chiave) {
          this.isLogged = true;

          localStorage.setItem('islogged', 'true');
          localStorage.setItem('user_logged', this.users[k]['username']);

          this._userService.addDeviceId(this.users[k]['id'], this.deviceInfo.id, this.isLogged);

          this.navCtrl.push(HomePage);
          
        } else {
          console.log('usuario o passwor incorrecto');
          localStorage.setItem('islogged', 'false');
        }
      }
    });
  }

}
