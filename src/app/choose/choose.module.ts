import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';

import { IonicModule } from '@ionic/angular';

import { ChoosePage } from './choose.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosePage
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
  declarations: [ChoosePage]
})
export class ChoosePageModule {}
