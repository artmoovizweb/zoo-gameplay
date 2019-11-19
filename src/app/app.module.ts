import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase';
import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';

import { UserService } from './user.service';

import { LottieAnimationViewModule } from 'ng-lottie';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    LottieAnimationViewModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, 
    AppRoutingModule],
  providers: [
    StatusBar,
    AngularFirestore,
    SplashScreen,
    BackgroundMode,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
