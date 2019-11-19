import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'choose', loadChildren: './choose/choose.module#ChoosePageModule' },
  { path: 'gamer', loadChildren: './gamer/gamer.module#GamerPageModule' },
  { path: 'roulette', loadChildren: './roulette/roulette.module#RoulettePageModule' },
  { path: 'quizz', loadChildren: './quizz/quizz.module#QuizzPageModule' },
  { path: 'back', loadChildren: './back/back.module#BackPageModule' },
  { path: 'question-game', loadChildren: './question-game/question-game.module#QuestionGamePageModule' },
  { path: 'difficult', loadChildren: './difficult/difficult.module#DifficultPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
