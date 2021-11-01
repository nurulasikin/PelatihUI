import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alertController } from '@ionic/core';
import { loadingController } from '@ionic/core';
@Component({
  selector: 'app-kemaskinikatalaluan',
  templateUrl: './kemaskinikatalaluan.page.html',
  styleUrls: ['./kemaskinikatalaluan.page.scss'],
})
export class KemaskinikatalaluanPage implements OnInit {

  public loadingController = loadingController;
  public alertController = alertController;
  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  back() {
    this.route.navigateByUrl('/tabs/profiledit');
  }
  exitApp(){
    
    this.route.navigateByUrl('/login');
  }

 async tukar(){
    const alert = await alertController.create({
         header: 'Peringatan',
         message: 'Katalaluan berjaya ditukar',
        buttons: ['ok', '']
      });
       await alert.present();
    
       this.route.navigateByUrl('/login');
  }
}


  
 
  
 


