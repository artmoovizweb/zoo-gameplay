import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';

import { IonicModule } from '@ionic/angular';

import { RoulettePage } from './roulette.page';

const routes: Routes = [
  {
    path: '',
    component: RoulettePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LottieAnimationViewModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RoulettePage]
})
export class RoulettePageModule {}
