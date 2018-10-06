import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OnlinePage } from '../online/online';

/**
 * Generated class for the CuttingNumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cutting-num',
  templateUrl: 'cutting-num.html',
})
export class CuttingNumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  cutting_completed(){
    this.navCtrl.push(OnlinePage);
  }

}
