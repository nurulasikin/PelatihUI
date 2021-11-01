import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sejarah-pembayaran',
  templateUrl: './sejarah-pembayaran.page.html',
  styleUrls: ['./sejarah-pembayaran.page.scss'],
})
export class SejarahPembayaranPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  
  next(){
    this.route.navigateByUrl('/tabs/butiran-pembayaran');
  }
  back(){
    this.route.navigateByUrl('tabs/dashboard');
  }
 logout(){
    this.route.navigateByUrl('/login');
  }
}


