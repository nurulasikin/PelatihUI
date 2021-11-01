import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { App } from '@capacitor/app';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public alertController = alertController;
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }
  Sent(){
    this.router.navigateByUrl('')
  }
  exitApp() {
    this.router.navigateByUrl('/homepage')

  }
  back() {
    this.router.navigateByUrl('/login')

  }
  async Send() {
    const alert = await alertController.create({
      header: '',
      message: 'Berjaya Dihantar, sila semak email anda',
      buttons: ['ok', '']
    });
    await alert.present();
    this.router.navigateByUrl('/login')

  }
}