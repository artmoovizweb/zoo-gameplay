import {HttpClient} from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {DomController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) 
  private document,private http: HttpClient) {

  }

  load()
  {
     return this.http.get('assets/questions.json');
  
   }
  
   setQuestionColor(color){
     this.domCtrl.write(() => {
       document.documentElement.style.setProperty('--ion-background-color', color);
     });

   }

}
