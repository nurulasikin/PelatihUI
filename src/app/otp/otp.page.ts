import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  public loadingController = loadingController;

  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }

async sahkan() {
    const loading = await loadingController.create({
      message: 'sila tunggu...',
      duration: 100
      
    });
    await loading.present();
    this.route.navigateByUrl('/login');
  }
  back() {
    this.route.navigateByUrl('/daftar-baru');
  }
  logout() {
    this.route.navigateByUrl('/homepage');
  }

}
