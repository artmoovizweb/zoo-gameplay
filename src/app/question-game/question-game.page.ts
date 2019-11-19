import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { PartyQuestions, PartyQuestionsResponse} from '../questions';
import { Injectable, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { PlayersService} from '../players.service';
import {NavController, AlertController,DomController} from '@ionic/angular';

import {QuestionsService} from '../questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-game',
  templateUrl: './question-game.page.html',
  styleUrls: ['./question-game.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class QuestionGamePage implements OnInit {

  public questions: PartyQuestions [] = [];
  public tenQuestions: any [] = [];
  public activeQuestion: PartyQuestions;
  players: any[];
  public index = 0;
  public player = "";



  constructor(private questionsService: QuestionsService, 
    private playersService: PlayersService,
    public navCtrl: NavController,
    public router: Router, @Inject(DOCUMENT) 
    private document ){


      this.activeQuestion = {

        "question":"",
        "background":"",
      };

    }



  ngOnInit() {

    this.questionsService.load().subscribe((res: PartyQuestions[])=>{
      console.log(res)

      this.questions = res;
      this.getPlayers();
      this.setQuestion();
      this.getTen();
    });

  }

  

//recupere question
  getPlayers(){
  
    // question = this.questions[selectedQuestion].question;
    // let gameplayer = "(players" + Math.floor(Math.random()*this.players.length);
    // this.questions[selectedQuestion].question =  question.replace("*players*", gameplayer);

    this.players = this.playersService.givePlayers();
  };



getTen(){

  this.players = this.playersService.givePlayers();
 
  for(var i = 0; i<16; i++){
    this.player = this.players[Math.floor(Math.random()*this.players.length)]
    //console.log(this.player)
    this.questions.Questions[i].question = this.questions.Questions[i].question.replace("player", this.player);
    //this.questions.Questions[i].bacground = this.questions.Questions[i].bacground;
    this.tenQuestions.push(this.questions.Questions[i].question);
    //this.tenQuestions.push(this.questions.Questions[i].background);
  }

  console.log(this.tenQuestions);
  this.activeQuestion = this.tenQuestions[0];

  }

//introduction des user

 /*gameComposition(){ 
   question = this.questions[selectedQuestion].question;
   let gameplayer = "(players" + Math.floor(Math.random()*this.players.length);
   this.questions[selectedQuestion].question =  question.replace("*players*", gameplayer);
 }*/
 
 
  setQuestion(){

      if (this.index < 20){
        this.activeQuestion = this.tenQuestions[this.index + 1];
        this.index++
      } else{
        this.router.navigate(['/back']);
    }
    console.log();

  }

  goMenu(){
    this.router.navigate(['/choose']);
  }

  goAddPlayer(){
    this.router.navigate(['/gamer']);
  }


/*
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  } */




}
