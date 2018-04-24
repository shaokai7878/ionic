import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MsgDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msg-detail',
  templateUrl: 'msg-detail.html',
})
export class MsgDetailPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgDetailPage');
  }

}
