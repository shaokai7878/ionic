import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutDetailPage}from'../about-detail/about-detail';
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  search="infor";

  infor=[
    {
      'title':'资产转让',
      'icon': 'assets/imgs/zichanbao.png'
    },
    {
      'title':'债券转让',
      'icon':'assets/imgs/zhaiquan.png'
    },
    {
      'title':'固产转让',
      'icon':'assets/imgs/guchan.png'
    },
    {
      'title':'商业保理',
      'icon':'assets/imgs/shangye.png'
    },
    {
      'title':'典当担保',
      'icon':'assets/imgs/diandang.png'
    },
    {
      'title':'债券转让',
      'icon':'assets/imgs/zhaiquan.png'
    },
    {
      'title':'悬赏信息',
      'icon':'assets/imgs/xuanshang.png'
    },
    {
      'title':'尽职调查',
      'icon':'assets/imgs/diaocha.png'
    }
  ]
  goAboutDetail(){
    this.navCtrl.push(AboutDetailPage);
  }
}
