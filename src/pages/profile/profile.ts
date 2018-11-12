import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../services/user.service";

import { User } from '../../interfaces/user';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: User;
  profile = [];
  books = [];
  name: string;
  lastname: string;
  email: string;
  phone: string;
  picture: string;
  username: string;
  country: string;
  userLog = localStorage.getItem('user_logged');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _userService: UserService
             ) {}

  ionViewDidLoad() {
    this._userService.getByUserName(this.userLog).subscribe(user => {
      this.user = user[0];
      this.name = this.user.name;
      this.lastname = this.user.lastname;
      this.email = this.user.email;
      this.phone = this.user.phone;
      this.picture = this.user.picture;
      this.username = this.user.username;
      this.country = this.user.country;
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

}
