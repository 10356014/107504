import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnlinePage } from '../online/online';
import { HomePage } from '../home/home';

/**
 * Generated class for the RestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rest',
  templateUrl: 'rest.html',
})
export class RestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestPage');
  }

  work(){
    this.navCtrl.push(OnlinePage);
  }

  logout(){
    this.navCtrl.push(HomePage);
  }

}
