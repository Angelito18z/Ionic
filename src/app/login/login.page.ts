import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
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

  constructor(private navController: NavController,private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas',
      duration: 1500,
      position: 'bottom',
      color: 'danger',
    });

    await toast.present();
  }

login(){
  if(this.email === 'correo@gmail.com' && this.password === 'pass' && this.user === 'riv'){
    this.navController.navigateRoot('/casa');
  
  }else{
    this.presentToast();
  }
  
}

}
