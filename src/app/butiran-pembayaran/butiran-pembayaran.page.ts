import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-butiran-pembayaran',
  templateUrl: './butiran-pembayaran.page.html',
  styleUrls: ['./butiran-pembayaran.page.scss'],
})
export class ButiranPembayaranPage implements OnInit {

  private selectedSegment: string ='butiranpembayaran'

  constructor(
    private route: Router,
     
  ) { }

  ngOnInit() {
  }
  
  kembali(){
    this.route.navigateByUrl('/tabs/dashboard');
  }
  logut(){
    this.route.navigateByUrl('/login');
  }
  back(){
    this.route.navigateByUrl('tabs/bayaran');
  }
  
  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment = event.target.value
  }

}


