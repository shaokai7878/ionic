import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { FormsModule } from '@angular/forms'; 
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { AlertController } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { HelloPage} from '../pages/hello/hello';
import { TabsPage} from '../pages/tabs/tabs';
import { AboutPage} from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SubpagePage} from '../pages/subpage/subpage';
import { LoginPage } from '../pages/login/login';
import { ServicePage} from '../pages/service/service';
import { AboutDetailPage}from'../pages/about-detail/about-detail';
import { MsgDetailPage} from '../pages/msg-detail/msg-detail';
import { SetDetailPage} from '../pages/set-detail/set-detail';

@NgModule({ 
  declarations: [
    MyApp,
    HomePage,
    HelloPage,
    TabsPage,
    AboutPage,
    ContactPage,
    SubpagePage,
    LoginPage,
    ServicePage,
    AboutDetailPage,
    MsgDetailPage,
    SetDetailPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      backButtonText:''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelloPage,
    TabsPage,
    AboutPage,
    ContactPage,
    SubpagePage,
    LoginPage,
    ServicePage,
    AboutDetailPage,
    MsgDetailPage,
    SetDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
