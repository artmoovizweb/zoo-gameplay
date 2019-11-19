import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

players =[]
connectPlayers =[]

  constructor() { }

  
//récupération de joueurs 
valideButton(playerList:string[]){
  this.players = playerList;
}

//renvoie les joueurs
givePlayers(){
 return this.players;
}


}
