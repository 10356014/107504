import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/Http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OnlinePage } from '../pages/online/online';
import { CuttingOverNumPage } from '../pages/cutting-over-num/cutting-over-num';
import { CuttingNumPage } from '../pages/cutting-num/cutting-num';
import { IonicStorageModule } from '@ionic/storage';
import { CheckOverNumPage } from '../pages/check-over-num/check-over-num';
import { RestPage } from '../pages/rest/rest';
import { CheckNumPage } from '../pages/check-num/check-num';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    OnlinePage,
    CheckOverNumPage,
    RestPage,
    CuttingOverNumPage,
    CheckNumPage,
    CuttingNumPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    OnlinePage,
    CheckOverNumPage,
    RestPage,
    CuttingOverNumPage,
    CheckNumPage,
    CuttingNumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
