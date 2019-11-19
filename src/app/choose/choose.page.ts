import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LottieAnimationViewModule } from 'ng-lottie';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage implements OnInit {

  lottieConfig:any;
  lottieGroupA:any;
  lottieGroupB:any;
  lottieGroupC:any;

  constructor(public navCtrl: NavController) { 

    LottieAnimationViewModule.forRoot();
 
    this.lottieConfig = {
      path: 'assets/pool.json',
      autoplay: true,
      loop: true
    }

    this.lottieGroupA = {
      path: 'assets/bounching_ball.json',
      autoplay: true,
      loop: true
    }

    this.lottieGroupB = {
      path: 'assets/bowser.json',
      autoplay: true,
      loop: true
    }

    this.lottieGroupC = {
      path: 'assets/superclassique.json',
      autoplay: true,
      loop: true
    }


  }




  
  ngOnInit() {
  }

}


