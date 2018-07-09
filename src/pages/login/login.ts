import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnlinePage } from '../online/online';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  doConfirm(){
    this.navCtrl.push(OnlinePage);
  }


}
