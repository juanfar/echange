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
  profile = [];
  books = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _userService: UserService
             ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this._userService.getUsers().subscribe(users => {
      console.log('user', users);
      this.profile = users[0].profile;
      this.books = users[0].books;
      console.log('profile', this.profile);
      console.log('books', this.books);
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

}
