import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { TabsPage} from'../tabs/tabs';
import { ToastController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  go(){
    this.navCtrl.push(TabsPage);
  }
  goGoing(){
    let toast = this.toastCtrl.create({
      message:'注册成功',
      duration:1000,
      position:'middle',
      cssClass:'bottomToast',
    });
    toast.present(toast);
      this.navCtrl.push(TabsPage);
  }
}
