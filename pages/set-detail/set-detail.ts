import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoginPage} from'../login/login';
/**
 * Generated class for the SetDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-detail',
  templateUrl: 'set-detail.html',
})
export class SetDetailPage {

  constructor(public modalCtrl:ModalController,
    public viewCtrl: ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetDetailPage');
  }
  back(){
    this.viewCtrl.dismiss();
  }
  GoLogin(){
    let profileModal = this.modalCtrl.create(LoginPage);
    profileModal.present();
  }
}
