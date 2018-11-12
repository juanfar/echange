import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

import { BookService } from "../../services/books.service";
import { UserService } from "../../services/user.service";

import { Book } from '../../interfaces/book';

@IonicPage()
@Component({
  selector: 'page-add-book',
  templateUrl: 'add-book.html',
})
export class AddBookPage {
  
  user: any;
  userLog = localStorage.getItem('user_logged');
  nBook = {};

  id: string;
  name: string;
  lastname: string;
  phone: string;
  picture: string;

  @ViewChild('bookForm') form: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _bookService: BookService,
              private _userService: UserService) {
  }

  ionViewDidLoad() {
    this._userService.getByUserName(this.userLog).subscribe(user => {
      this.user = user[0];
      this.id = this.user.id;
      this.name = this.user.name;
      this.lastname = this.user.lastname;
      this.picture = this.user.picture;
      this.phone = this.user.phone;

      this.nBook = {
        id_prof: this.id,
        name_prof: this.name,
        picture_prof: this.picture,
        user_prof: this.userLog,
        image: 'https://firebasestorage.googleapis.com/v0/b/echange-cd725.appspot.com/o/books%2Fdefault-book.jpg?alt=media&token=130ec569-ba31-4616-8310-76f7440960f3'
      }
    });
  }

  bookForm() {
    console.log('nBook', this.nBook);
    this._bookService.addBook(this.nBook);
    this.nBook = {};
    this.navCtrl.push(HomePage);
  }

}
