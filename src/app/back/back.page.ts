import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LottieAnimationViewModule } from 'ng-lottie';

@Component({
  selector: 'app-back',
  templateUrl: './back.page.html',
  styleUrls: ['./back.page.scss'],
})


export class BackPage implements OnInit {

  lottieConfig:any;

  constructor(public navCtrl: NavController) { 

    LottieAnimationViewModule.forRoot();
 
    this.lottieConfig = {
      path: 'assets/stars-success.json',
      autoplay: true,
      loop: true
    }

  }

  ngOnInit() {
  }

}
