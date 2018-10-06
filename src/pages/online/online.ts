import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CheckOverNumPage } from '../check-over-num/check-over-num';
import { RestPage } from '../rest/rest';
import { CheckNumPage } from '../check-num/check-num';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  rest(){
    this.navCtrl.push(RestPage);
  }
  cutPass(){
    this.navCtrl.push(CheckOverNumPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OnlinePage');
  }

  //------------剪髮通知---------------------
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '剪髮通知',
      message: '**號客人需要剪髮',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.push(RestPage);
          }
        },
        {
          text: '確認',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(CheckNumPage);
          }
        }
      ]
    });
    confirm.present();
  }

}
