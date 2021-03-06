import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, UserInfo } from 'firebase/app';
import {Router} from '@angular/router';
import { UserService } from '../user.service';

import { AngularFirestore } from '@angular/fire/firestore';

import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string =""
  password: string =""
  cpassword: string =""


  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public alert: AlertController,
    public route: Router,
    public user: UserService,
    public alertController: AlertController
  
  ) { }

  ngOnInit() {
  }


  async presentAlert(title: string, content: string){
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['ok']
    })

    await alert.present()
  }

  async register(){
    const {username, password, cpassword} = this
    if(password !== cpassword){
      this.showAlert("Error!", "Passwords don't match")
      return console.error("Password don't match")
    }
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@bemycm.com', password)
      //this.showAlert("Succes!", "Welcome aboard!")
      //this.route.navigate(['/choose'])
      this.afstore.doc('users/${res.user.uid}').set({
        username
      })
      
      this.user.setUser({
        username,
        uid: res.user.uid
      })

      this.presentAlert('Succes', 'You are registered!')
      this.route.navigate(['/choose'])
    
    
    } catch(error){
        console.dir(error)
        this.showAlert("Error", error.message)
    }
  }
 

  async showAlert(header: string, message: string){
      const alert = await this.alert.create({
        header,
        message,
        buttons: ["ok"]
      })

      await alert.present()

  }



}
