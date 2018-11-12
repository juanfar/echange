import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookDetailsPage } from '../book-details/book-details';
import { AddBookPage } from "../add-book/add-book";
import { BookService } from "../../services/books.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  books = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _bookService: BookService) {}

  ionViewDidLoad() {
    this._bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  goDetails(id) {
    console.log('id', id);
    this.navCtrl.push(BookDetailsPage, {
      idPassed: id
    });
  }

  goNewBook() {
    this.navCtrl.push(AddBookPage);
  }

}
