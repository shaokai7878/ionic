import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about-detail',
  templateUrl: 'about-detail.html',
})
export class AboutDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutDetailPage');
  }
  items1=[
    {"title1":"请选择"},
  ]

}
