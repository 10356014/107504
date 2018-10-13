import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OnlinePage } from '../online/online';
import { CuttingNumPage } from '../cutting-num/cutting-num';
/**
 * Generated class for the CheckNumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-check-num',
  templateUrl: 'check-num.html',
})
export class CheckNumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  guest_Notarrived(){
    this.navCtrl.push(OnlinePage);
  }
  guest_arrived(){
    this.navCtrl.push(CuttingNumPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckNumPage');
  }

}
