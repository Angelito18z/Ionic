import { Component, OnInit } from '@angular/core';
import { IonButton, LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: false
})
export class ProgressPage implements OnInit {
  public buffer = 0.06;
  public progress = 0;

  constructor(private loadingCtrl: LoadingController) {
    setInterval(() => {
      this.buffer += 0.06;
      this.progress += 0.06;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.buffer = 0.06;
          this.progress = 0;
        }, 1000);
      }
    }, 1000); }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 3000,
    });

    loading.present();
  }


  
  ngOnInit() {
  }


  
}
