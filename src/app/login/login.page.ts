import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {  LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  user: string = '';
email: string = '';
password: string = '';

  constructor(private navController: NavController,private toastController: ToastController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async presentToast(message: string, color:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color: color,
    });

    await toast.present();
  }

  async login(){
    const localEmail = localStorage.getItem('userEmail');
    const localPassword = localStorage.getItem('userPassword');
    const localUser = localStorage.getItem('userName');
   
    console.log(localUser,' ' , localEmail , ' ', localPassword);
    if(this.email === localEmail && this.password === localPassword && this.user === localUser){
    await this.showLoading();
      this.presentToast('Inicio exitoso', 'primary')
      this.navController.navigateRoot('/casa');
    
    }else{
      this.presentToast('Credenciales invalidas', 'warning');
    }
   
  }

async showLoading() {
  const loading = await this.loadingCtrl.create({
    message: 'Cargando...',
    duration: 1000,
  });

  loading.present();
  await loading.onDidDismiss();
}

}
