import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';

import { IonicModule } from '@ionic/angular';

import { QuizzPage } from './quizz.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    LottieAnimationViewModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizzPage]
})
export class QuizzPageModule {}
