import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { loadingController } from '@ionic/core';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-kalkulator-pembiayaan',
  templateUrl: './kalkulator-pembiayaan.page.html',
  styleUrls: ['./kalkulator-pembiayaan.page.scss'],
})
export class KalkulatorPembiayaanPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  back(){
    this.route.navigateByUrl('/tabs/dashboard');
  }
  logout(){
    this.route.navigateByUrl('/login');
  }

}
