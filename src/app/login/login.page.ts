import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LottieAnimationViewModule } from 'ng-lottie';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";
  
  lottieConfig:any;

  constructor(public afAuth: AngularFireAuth, 
    public user: UserService,
  public router: Router,
  public navCtrl: NavController) {

    LottieAnimationViewModule.forRoot();
 
    this.lottieConfig = {
      path: 'assets/superclassique.json',
      autoplay: true,
      loop: true
    }

   }




  ngOnInit() {
  }

  async login(){
    //methode login
    const {username, password } = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@bemycm.com' , password)
    
      if(res.user){

        this.router.navigate(['/choose'])

    }
    
    } catch(err){
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("use not found")
      }
    }
  }



}
