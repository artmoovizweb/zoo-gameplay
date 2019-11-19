import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';

import { IonicModule } from '@ionic/angular';

import { GamerPage } from './gamer.page';

const routes: Routes = [
  {
    path: '',
    component: GamerPage
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
  declarations: [GamerPage]
})
export class GamerPageModule {}
