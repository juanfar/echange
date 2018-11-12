import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from "../register/register";

@IonicPage()
@Component({
  selector: 'page-reg-log',
  templateUrl: 'reg-log.html',
})
export class RegLogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegLogPage');
  }
  goReg() {
  this.navCtrl.push(RegisterPage);
  }
  goLog() {
    this.navCtrl.push(LoginPage);
  }

}
