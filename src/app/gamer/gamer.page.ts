import { Component, OnInit } from '@angular/core';
import {NavController, AlertController } from '@ionic/angular';
import {PlayersService} from '../players.service';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.page.html',
  styleUrls: ['./gamer.page.scss'],
})
export class GamerPage implements OnInit {

  playerList = [];
  playerName = "";


  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              private playersService: PlayersService
) {}

ngOnInit() {
}

//ajouter des joeurs
  addPlayer(){
    if (this.playerName.length >0){
      let player = this.playerName;
      this.playerList.push(player);
      this.playerName = "";
      
    
    }
  }



//validate button pour récupérer les informations à transmettre dans la page game
confirmationButton(){
  this.playersService.valideButton(this.playerList);
  //console.log(this.playerList);
}
  

// supprimer des joueurs
  deletePlayer(index){
    this.playerList.splice(index, 1);
  }

// modification des noms de joueur
  async updatePLayer(index) {
    let alert = await this.alertCtrl.create({
        message: 'nouveau nom du joeur',
        inputs: [{ name: 'editPLayer', placeholder: 'joueur' }],
        buttons: [{ text: 'Annuler', role: 'cancel' },
                  { text: 'Valider', handler: data => {
                      this.playerList[index] = data.editPLayer; }
                  }
                 ]
    });

    await alert.present();
  }

}