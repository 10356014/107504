import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/Http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  textInput:any;
  passWordInput:any;
  birth:any;
  b:any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http:Http) {

  }

  submit(){
    let params: URLSearchParams = new URLSearchParams();
    params.set('desID', this.textInput);
    this.http.get('http://140.131.114.143/project/data/login.php', {search: params})			
      .subscribe(
        (data) => {
          this.birth=data.json()['birthday'];
          if(this.birth == null){
            let confirm = this.alertCtrl.create({
              title: '提示',
              message: '帳號或密碼錯誤',
              buttons: [
                {
                  text: '返回',handler: () => {}
                }
              ] 
            });
            confirm.present()
          }else{
            this.b = this.birth.replace(/[^0-9]/g,'');
            if(this.passWordInput==this.b){
              this.navCtrl.push(LoginPage);
            }else{
              let confirm = this.alertCtrl.create({
                title: '提示',
                message: '帳號或密碼錯誤',
                buttons: [
                  {
                    text: '返回',handler: () => {}
                  }
                ] 
              });
              confirm.present()
            } 
          } 
        }, error => {
            this.showAlert();
        }
      );
  }

  doConfirm(){
    if(this.textInput == undefined || this.passWordInput == undefined){
      let confirm = this.alertCtrl.create({
        title: '提示',
        message: '請輸入帳號或密碼',
        buttons: [
          {
            text: '返回',handler: () => {}
          }
        ] 
      });
      confirm.present()
    }else{
      this.submit()
    }
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
