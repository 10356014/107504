import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnlinePage } from '../online/online';
import { CuttingOverNumPage } from '../cutting-over-num/cutting-over-num'
/**
 * Generated class for the CheckOverNumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-check-over-num',
  templateUrl: 'check-over-num.html',
})
export class CheckOverNumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back(){
    this.navCtrl.push(OnlinePage);
  }
  doConfirm(){
    this.navCtrl.push(CuttingOverNumPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CutPassPage');
  }
}
