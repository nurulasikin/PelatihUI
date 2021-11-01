import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadingController } from '@ionic/core';


@Component({
  selector: 'app-daftar-baru',
  templateUrl: './daftar-baru.page.html',
  styleUrls: ['./daftar-baru.page.scss'],
})
export class DaftarBaruPage implements OnInit {

  public loadingController = loadingController;

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.route.navigateByUrl('/login');
  }
  exitApp(){
    this.route.navigateByUrl('/homepage');

    }
  async Daftar() {
  const loading = await loadingController.create({
        message: 'sila tunggu...',
        duration: 100
        
      });
      await loading.present();
      this.route.navigateByUrl('/otp');
    }
  }
