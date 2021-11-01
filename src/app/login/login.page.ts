import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadingController } from '@ionic/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit 
{

  constructor 
  (private router: Router,) 
  { }

  ngOnInit() {
  }

  async logmasuk() 
{
  const loading = await loadingController.create({
    message: 'sila tunggu...',
    duration: 100
    
  });
  await loading.present();

console.log('klik logmasuk');
this.router.navigateByUrl('tabs/dashboard');
}
 
forgotPassword() {
  this.router.navigateByUrl('/forgot-password');
}
exitApp() {
  this.router.navigateByUrl('/otp');

}
logout() {
  this.router.navigateByUrl('/homepage');

}
}
