import { DetialPage } from './../pages/detial/detial';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataProvider } from '../providers/data/data';
import { MainPage } from './../pages/main/main';

import { AdMobFree } from '@ionic-native/admob-free';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetialPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetialPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AdMobFree
  ]
})
export class AppModule {}
