import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HomePage} from '../home/home';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { HelloPage } from '../hello/hello';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage; 
  tab5Root = HelloPage;
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
