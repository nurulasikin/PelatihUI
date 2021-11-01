import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit(){
  }
  edit(){
    this.route.navigateByUrl('tabs/profiledit')
  }
  exitApp() {
    this.route.navigateByUrl('');
  
  }
  logout() {
    this.route.navigateByUrl('/homepage');
  
  }
  back() {
    this.route.navigateByUrl('/tabs/dashboard');
  }
}



