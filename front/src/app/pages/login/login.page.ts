import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from './../../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public userLogin: User = {};
    public userRegister: User = {};
    public loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private AuthService:AuthService) { }

  ngOnInit() {
  }

  async login(){
    console.log(this.userLogin)
    //this.AuthService.login(this.userLogin);
    await this.presentLoading();

    try{
      await this.AuthService.login(this.userLogin);
   } catch (error){
    console.error(error);
    this.presentToast(error.message);
   } finally{
    this.loading.dismiss();
   }
  }
  
  async register(){
    //console.log(this.userRegister)
    await this.presentLoading();
    try{
      await this.AuthService.register(this.userRegister);
   } catch (error){
    console.error(error);
    this.presentToast(error.message);
   } finally{
    this.loading.dismiss();
   }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({message: 'Carregando...'})
      //duration: 2000
      return this.loading.present();
    }
  
  async presentToast( message: string) {
      const toast = await this.toastCtrl.create({message ,duration:2000});
      toast.present();
    }

}
