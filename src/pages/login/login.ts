import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnlinePage } from '../online/online';
import { AlertController } from 'ionic-angular';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/Http';

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
  citySelect:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public alertCtrl: AlertController, public events: Events) {
    let params: URLSearchParams = new URLSearchParams();
    //this.http.get('http://140.131.114.143/project/data/get_storeList.php', {search: params})
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  doConfirm(){
    this.navCtrl.push(OnlinePage);
  }
//資料陣列------------------------------------------------------------
	getData(myString){	
    this.result = new Set(); //新增集合	
    for(var i=0; i< myString.length; i++){
		  //取出若干欄位資料
      var stoNo= myString[i].stoNo;
      var stoCity=myString[i].stoCity;				
      var stoName=myString[i].stoName;

      //將存有資料的物件加入陣列
      this.myNo.push(stoNo);
      this.myCity.push(stoCity);
      this.myName.push(stoName);
		  
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
      var cityStoreId= this.myNo[i];
      this.myCityStoreId.push(cityStoreId);
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
  console.log(storeSelect); 
  //this.storage.set('storeSelect', storeSelect);
  
  for(var i=0; i< this.myName.length; i++){
    if (this.myName[i]==storeSelect){
      var selectId=this.myNo[i];
    }
  }
  
  /*this.pushId = selectId;
  this.storage.set('pushId', this.pushId);
  console.log(this.pushId);*/
  
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
