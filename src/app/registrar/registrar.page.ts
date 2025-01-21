import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {NgForm} from '@angular/forms';

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
  confirmPassword: string ='';

  constructor(private router: Router,private toastController: ToastController) { }

  ngOnInit() {
  }

registrar (form: NgForm){
console.log(form.value);
console.log(form.valid)

  if(form.valid){
    if (form.value.password!=form.value.confirmPassword){

      this.presentToast('Contraseñas diferentes', 'warning');
     
    }else{
      
      localStorage.setItem('userEmail', this.email);
      localStorage.setItem('userPassword', this.password);
      localStorage.setItem('userName' , this.user);  
      this.presentToast('Registro exitoso', 'primary');
      this.router.navigate(['/login']); 
    
    }
    
  }else{
    this.presentToast('Rellena todos los campos','warning');        
  }


 

  
}

async presentToast(message: string, color: string,) {
  const toast = await this.toastController.create({
    message: message,
    duration: 1500,
    position: 'bottom',
    color: color,
  });

  await toast.present();
}

}
