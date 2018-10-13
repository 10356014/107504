import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnlinePage } from '../online/online';
import { AlertController } from 'ionic-angular';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/Http';
import { Storage } from '@ionic/storage';

//---------------------------------------------
import { ViewChild } from '@angular/core';
import { Select } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  items:any;
  result:any; 
  myNo=[];
  myCity=[];
  myName=[];
  myCityStore=[];
  myCityStoreId=[];
  myrNo=[];
  citySelect:any;
  storeSelect:any;
  addAtt:any;
  addOn:any;
  stoId:any;
  robId:any;
  desNo:any;
  desState:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public alertCtrl: AlertController, public events: Events, private storage: Storage) {
    let params: URLSearchParams = new URLSearchParams();
    this.http.get('http://140.131.114.143/project/data/get_robNo.php', {search: params})			
    .subscribe(
      (data) => {
        this.items=data.json()['records'];
        console.log(this.items);
        this.getData(this.items);
      },(err) => {
        this.showAlert();
      }
    );


    this.readState();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

//讀取狀態---------------------------------------------------------------- 
  readState(){
    this.storage.get('desNo').then((desNo) => {
      console.log('理髮師編號', desNo);
      this.desNo = desNo;
    });

      let params: URLSearchParams = new URLSearchParams();
      params.set('desNo', "D006");
      this.http.get('http://140.131.114.143/project/data/readDesState.php', {search: params})			
        .subscribe(
          (data) => {
            this.desState=data.json()['desState'];
            this.storage.set('desState', this.desState);
            console.log(this.desState);
          }, error => {
              this.showAlert();
          }
        );
  }

//防呆訊息---------------------------------------------------------------- 
  doConfirm(){
    if (this.citySelect == undefined || this.storeSelect == undefined) {
      let confirm = this.alertCtrl.create({
        title: '提示',
        message: '請選擇店鋪縣市及名稱',
        buttons: [
          {
            text: '返回',handler: () => {}
          }
        ] 
      });
      confirm.present()
    }else{
      
      this.addAttendance();
      //this.addOnDuty();
      this.navCtrl.push(OnlinePage);
    }
  }

//新增出勤------------------------------------------------------------
  addAttendance(){
  let params = new FormData();
        params.append('desNo', this.desNo);
        params.append('stoNo', this.stoId);
        params.append('clock-in', '');
        this.http.post('http://140.131.114.143/project/data/addAttendance.php',params)
        .subscribe(data => {
            this.addAtt=data.json();
            console.log(this.addAtt);
          }, error => {
            this.showAlert();
          }
        );
    }

//新增值班------------------------------------------------------------
addOnDuty(){
  let params = new FormData();
        params.append('desNo', this.desNo);
        params.append('stoNo', this.stoId);
        params.append('desState', '0');
        params.append('finishTime', '');
        this.http.post('http://140.131.114.143/project/data/addOnDuty.php',params)
        .subscribe(data => {
            this.addOn=data.json();
            console.log(this.addOn);
          }, error => {
            this.showAlert();
          }
        );
    }

//資料陣列------------------------------------------------------------
  getData(myString){	
    this.result = new Set(); //新增集合	
    for(var i=0; i< myString.length; i++){
		  //取出若干欄位資料
      var stoNo= myString[i].stoNo;
      var stoCity=myString[i].stoCity;				
      var stoName=myString[i].stoName;
      var robNo=myString[i].robNo;

      //將存有資料的物件加入陣列
      this.myNo.push(stoNo);
      this.myCity.push(stoCity);
      this.myName.push(stoName);
      this.myrNo.push(robNo)
		  
      //如果集合內沒有相同的值，就放入result中
      if (this.result.has(stoCity) != true){
        this.result.add(stoCity);
      }  

    }  
    this.selectCity(this.citySelect);   
  }

//店鋪縣市------------------------------------------------------------
  selectCity(citySelect) {  
    this.myCityStore=[];
    this.myCityStoreId=[];

    //this.storage.set('citySelect', citySelect);
    this.clickStore()

    for(var i=0; i< this.myCity.length; i++){
      if (citySelect==this.myCity[i]){
        var cityStore= this.myName[i];
        this.myCityStore.push(cityStore);
        /*var cityStoreId= this.myNo[i];
        this.myCityStoreId.push(cityStoreId);*/
      }
    }
  }

@ViewChild('mySelect') selectRef: Select;
//clickStore---------------------------------------------------------
  clickStore(){
    if(this.citySelect==null){
      this.selectRef.disabled=true;
    }else{
      this.selectRef.disabled=false;
    } 
  }

//店鋪名稱------------------------------------------------------------
selectStore(storeSelect) {  
  this.storage.set('storeSelect', storeSelect);
  console.log(storeSelect);
  
  for(var i=0; i< this.myName.length; i++){
    if (this.myName[i]==storeSelect){
      var selectSto=this.myNo[i];
      var selectRob=this.myrNo[i];
    }
  }
  
  this.stoId = selectSto;
  this.robId = selectRob;
  this.storage.set('stoId', this.stoId);
  this.storage.set('robId', this.robId);
  console.log('店舖編號 '+this.stoId);
  console.log('小貝編號 '+this.robId);
  
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
