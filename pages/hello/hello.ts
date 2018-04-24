import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetDetailPage} from '../set-detail/set-detail';


@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage {
//imgSrc:string;
items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'芽币'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'我发布的'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'我合作的'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'我的收藏'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'我的草稿箱'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'视频发布'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'完善信息'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'VIP等级'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'账户安全'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'帮助与反馈'
      },
      {'shezhi':'assets/imgs/shezhi.png',
        'title':'设置'
      },
    ];
  }


  // takePhoto(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.imgSrc=base64Image;
  //    }, (err) => {
  //    });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
  }
  goSetDetail(){
    this.navCtrl.push(SetDetailPage);
  }
}
