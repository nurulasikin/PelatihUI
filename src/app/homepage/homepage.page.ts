import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { loadingController } from '@ionic/core';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  public loadingController = loadingController;
  public alertController = alertController;
  

  constructor(
    private route: Router,
   

  ) { }

 

  ngOnInit() {
  }

 async onSubmit() {
    const loading = await loadingController.create({
      message: 'sila tunggu...',
      duration: 100
      
    });
    await loading.present();
    this.route.navigateByUrl('/daftar-baru');

    // const alert = await alertController.create({
    //   header: 'Peringatan',
    //   message: '! sila masukan nombor kad pengenalan tanpa sengkang',
    //   buttons: ['kembali', '']
    // });
    // await alert.present();
  
    // this.route.navigateByUrl('/homepage');
  }

exitApp() {
  console.log('Exit App');
  App.exitApp();

}
}
    
  
  






