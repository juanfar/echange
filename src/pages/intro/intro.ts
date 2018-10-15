import { offset } from 'ionic-angular/umd/components/slides/swiper/swiper-utils';
import { transform } from 'ionic-angular/components/slides/swiper/swiper-utils';
import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  /*animations: [
    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset})
      ])))
    ])
  ]*/
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Omitir";

  constructor(public navCtr: NavController) {

  }

  skip() {
    this.navCtr.push(TabsPage);
  }

  slideChanged() {
    if(this.slides.isEnd())
      this.skipMsg = "Perfecto, estoy listo";
  }
}
