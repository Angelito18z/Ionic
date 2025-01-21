import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone:false
})
export class RegistrarPage implements OnInit {

  user: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router,private toastController: ToastController) { }

  ngOnInit() {
  }

registrar (){
  localStorage.setItem('userEmail', this.email);
  localStorage.setItem('userPassword', this.password);
  localStorage.setItem('userName' , this.user);

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas',
      duration: 1500,
      position: 'bottom',
      color: 'danger',
    });

    await toast.present();
  }
  
  this.router.navigate(['/login']);
}

}
