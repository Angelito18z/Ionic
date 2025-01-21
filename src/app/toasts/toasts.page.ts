import { Component, OnInit } from '@angular/core';
import { IonButton, ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.page.html',
  styleUrls: ['./toasts.page.scss'],
  standalone: false
})
export class ToastsPage implements OnInit {

  public toastButtons = [
    {
      text: 'Dismiss',
      role: 'cancel',
    },
  ];

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hola mundo!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
