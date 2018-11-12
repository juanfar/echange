import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookDetailsPage } from '../book-details/book-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goDetails () {
    this.navCtrl.push(BookDetailsPage);
  }

}
