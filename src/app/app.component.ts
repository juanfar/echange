import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from "../pages/home/home";
import { IntroPage } from "../pages/intro/intro";
import { PostsPage } from "../pages/posts/posts";
import { AddBookPage } from "../pages/add-book/add-book";
import { RegisterPage } from "../pages/register/register";
import { LoginPage } from "../pages/login/login";
import { SplashPage } from "../pages/splash/splash";
import { RegLogPage } from "../pages/reg-log/reg-log";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = SplashPage;

  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    });
  }
}
