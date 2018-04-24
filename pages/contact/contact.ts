import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MsgDetailPage}from'../msg-detail/msg-detail';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[
      {'title':'Slimer1',
      'touxiang':'assets/imgs/xinxi.png',
      'neirong':'hi~请问什么是不良资产',
      'time':'14:02'},
      {'title':'Slimer2',
      'touxiang':'assets/imgs/xinxi.png',
      'neirong':'hi~请问什么是不良资产',
      'time':'15:02'},
      {'title':'Slimer3',
      'touxiang':'assets/imgs/xinxi.png',
      'neirong':'hi~请问什么是不良资产',
      'time':'16:02'},
      {'title':'Slimer4',
      'touxiang':'assets/imgs/xinxi.png',
      'neirong':'hi~请问什么是不良资产',
      'time':'14:02'},
      {'title':'Slimer5',
      'touxiang':'assets/imgs/xinxi.png',
      'neirong':'hi~请问什么是不良资产',
      'time':'17:02'},
      {'title':'Slimer6',
      'touxiang':'assets/imgs/xinxi.png',
      'neirong':'hi~请问什么是不良资产',
      'time':'18:02'},
      {'title':'Slimer7',
      'touxiang':'assets/imgs/xinxi.png',
      'neirong':'hi~请问什么是不良资产',
      'time':'19:02'}
    ];
  }
  goMsgDetail(item){
    this.navCtrl.push(MsgDetailPage,{item:item});
  }
}
