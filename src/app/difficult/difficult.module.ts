import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';

import { IonicModule } from '@ionic/angular';

import { DifficultPage } from './difficult.page';

const routes: Routes = [
  {
    path: '',
    component: DifficultPage
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
  declarations: [DifficultPage]
})
export class DifficultPageModule {}
