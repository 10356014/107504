import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CutPassPage } from '../cut-pass/cut-pass';
import { RestPage } from '../rest/rest';


/**
 * Generated class for the OnlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-online',
  templateUrl: 'online.html',
})
export class OnlinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  rest(){
    this.navCtrl.push(RestPage);
  }
  cutPass(){
    this.navCtrl.push(CutPassPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OnlinePage');
  }

}
