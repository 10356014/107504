import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, URLSearchParams } from '@angular/Http';

import { CheckOverNumPage } from '../check-over-num/check-over-num';
import { RestPage } from '../rest/rest';
import { CheckNumPage } from '../check-num/check-num';


@Component({
  selector: 'page-online',
  templateUrl: 'online.html',
})
export class OnlinePage {
  desName:any;
  storeSelect:any;
  desNo:any;
  state:any;
  desState:any;
  ds:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http:Http, private storage: Storage) {
    this.storage.get('desNo').then((desNo) => {
      console.log('理髮師編號', desNo);
      this.desNo = desNo;
    });

    this.storage.get('desName').then((desName) => {
      console.log('理髮師', desName);
      this.desName = desName;
    });

    this.storage.get('storeSelect').then((storeSelect) => {
      console.log('服務店鋪', storeSelect);
      this.storeSelect = storeSelect;
    });

    this.readState();
  }

  readState(){
    this.storage.get('desState').then((desState) => {
      console.log('設計師狀態', desState);
      this.desState = desState;
      if(this.desState==0){
        this.ds="可剪髮"
      }else if(this.desState==1){
        this.ds="剪髮中"
      }else if(this.desState==2){
        this.ds="休息中"
      }else{
        this.ds="錯誤"
      }
    });
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

  //連線失敗訊息------------------------------------------------------------
     showAlert() {
      let alert = this.alertCtrl.create({
        title: '連線失敗!',
        subTitle: '請確定網路狀態, 或是主機是否提供服務中.',
        buttons: ['OK']
      });
      alert.present();
  }

}
