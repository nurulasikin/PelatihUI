import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statuspermohonanpembiayaan',
  templateUrl: './statuspermohonanpembiayaan.page.html',
  styleUrls: ['./statuspermohonanpembiayaan.page.scss'],
})
export class StatuspermohonanpembiayaanPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  back() {
    this.route.navigateByUrl('/tabs/semakan-status');
  }

 

  logout() {
    this.route.navigateByUrl('/login');
  }    

}
