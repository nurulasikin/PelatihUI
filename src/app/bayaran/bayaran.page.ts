import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bayaran',
  templateUrl: './bayaran.page.html',
  styleUrls: ['./bayaran.page.scss'],
})
export class BayaranPage implements OnInit {

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
  logut(){
    this.route.navigateByUrl('/homepage');
  }

  

}

