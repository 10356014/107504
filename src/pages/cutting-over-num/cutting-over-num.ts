import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OnlinePage } from '../online/online';


/**
 * Generated class for the CuttingOverNumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cutting-over-num',
  templateUrl: 'cutting-over-num.html',
})
export class CuttingOverNumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  cutting_completed(){
    this.navCtrl.push(OnlinePage);
  }

}
