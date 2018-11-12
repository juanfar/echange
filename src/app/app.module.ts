import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
import { IntroPage } from '../pages/intro/intro';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { BookDetailsPage } from '../pages/book-details/book-details';
import { ChatPage } from '../pages/chat/chat';
import { PostsPage } from '../pages/posts/posts';
import { RegisterPage } from '../pages/register/register';
import { AddBookPage } from "../pages/add-book/add-book";
import { LoginPage } from "../pages/login/login";
import { SplashPage } from "../pages/splash/splash";
import { RegLogPage } from "../pages/reg-log/reg-log";

import { StatusBar } from '@ionic-native/status-bar';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { credentials } from './config';

// Service
import { UserService } from "../services/user.service";
import { BookService } from "../services/books.service";

// Device
import { Device } from '@ionic-native/device';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    BookDetailsPage,
    ChatPage,
    PostsPage,
    AboutPage,
    ProfilePage,
    HomePage,
    RegisterPage,
    AddBookPage,
    LoginPage,
    SplashPage,
    RegLogPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(credentials.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    BookDetailsPage,
    ChatPage,
    PostsPage,
    AboutPage,
    ProfilePage,
    HomePage,
    RegisterPage,
    AddBookPage,
    LoginPage,
    SplashPage,
    RegLogPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    UserService,
    BookService,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
