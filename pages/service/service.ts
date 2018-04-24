import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }
  servicelist = [
    {
      'title': '资产包转让',
      'number': 'FB001',
      'icon': 'assets/imgs/zichanbao.png',
      'area': '北京',
      'source': '银行',
      'type': '抵押',
      'accont': '500万',
      'exchange': '300万'
    },
    {
      'title': '委外催收',
      'number': 'FB001',
      'icon': 'assets/imgs/xuanshang.png',
      'area': '北京',
      'source': '已诉讼',
      'type': '个人',
      'accont': '100',
      'exchange': '15%-30%'
    },
    {
      'title': '资产包转让',
      'number': 'FB001',
      'icon': 'assets/imgs/zichanbao.png',
      'area': '北京',
      'source': '银行',
      'type': '抵押',
      'accont': '500万',
      'exchange': '300万'
    },
    {
      'title': '委外催收',
      'number': 'FB001',
      'icon': 'assets/imgs/xuanshang.png',
      'area': '北京',
      'source': '已诉讼',
      'type': '个人',
      'accont': '100',
      'exchange': '15-30'
    },
  ]

  dixian=""

  doInfinite(infiniteScroll) 
  {
    var listdata = 
    {
      'title': '资产包转让',
      'number': 'FB001',
      'icon': 'assets/imgs/zichanbao.png',
      'area': '北京',
      'source': '银行',
      'type': '抵押',
      'accont': '500万',
      'exchange': '300万'
    }

    setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        this.servicelist.push(listdata);
      }

      infiniteScroll.complete();
      if(this.servicelist.length>6){
        this.dixian="我是有底线的"
        infiniteScroll.enable(false);
      }
    }, 500);
  }
}
