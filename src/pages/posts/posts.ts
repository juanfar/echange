import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../services/user.service";

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
idPassed: string;
  id: string;
  userBook: any;
  oneBook: any;
  name: string;
  date: string;
  autor: string;
  image: string;
  profName: string;
  profLast: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _userService: UserService) {

    this.idPassed = navParams.get("idPassed");
  }

  ionViewDidLoad() {
    this.id = this.idPassed;
    this._userService.getUser(this.id).subscribe(book => {
      this.oneBook = book.books.book1;
      this.userBook = book.profile;
      this.profName = this.userBook.name;
      this.profLast = this.userBook.lastname;
      this.name = this.oneBook.name;
      this.autor = this.oneBook.autor;
      this.date = this.oneBook.date;
      this.image = this.oneBook.image;
      console.log('oneBook', typeof this.oneBook)
    });
  }

}
