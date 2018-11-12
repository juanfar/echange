import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { BookService } from "../../services/books.service";

import { Book } from "../../interfaces/book";

@IonicPage()
@Component({
  selector: 'page-book-details',
  templateUrl: 'book-details.html',
})
export class BookDetailsPage {
  idPassed?: string;
  id?: string;
  userBook?: any;
  oneBook?: any;
  name?: string;
  date?: string;
  autor?: string;
  image?: string;
  picture_prof?: string;
  name_prof?: string;
  phone_prof?: string;
  book?: Book;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _bookService: BookService) {

    this.idPassed = navParams.get("idPassed");
  }

  ionViewDidLoad() {
    this.id = this.idPassed;
    this._bookService.getBook(this.id).subscribe(book => {
      this.book = book;
      this.name = this.book.name;
      this.autor = this.book.autor;
      this.date = this.book.date;
      this.image = this.book.image;
      this.name_prof = this.book.name_prof;
      this.picture_prof = this.book.picture_prof;
      this.phone_prof = this.book.phone_prof;
      
      console.log('book', this.book);
    });
  }

  goBack() {
    this.navCtrl.pop();
  }
  goChat () {
    this.navCtrl.push(ChatPage);
  }

}
