import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-profiledit',
  templateUrl: './profiledit.page.html',
  styleUrls: ['./profiledit.page.scss'],
})
export class ProfileditPage implements OnInit {

  constructor(
    private route:Router,
  ) { }

 
  ngOnInit() {
  }
kemaskini(){
    this.route.navigateByUrl('/tabs/profil')
  }

back(){
    this.route.navigateByUrl('/tabs/profil')
  }
logout(){
    this.route.navigateByUrl('/login')
  }

 change(){
    this.route.navigateByUrl('/tabs/kemaskinikatalaluan')
  }

}
