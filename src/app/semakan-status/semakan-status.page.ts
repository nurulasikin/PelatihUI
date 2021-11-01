import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-semakan-status',
  templateUrl: './semakan-status.page.html',
  styleUrls: ['./semakan-status.page.scss'],
})
export class SemakanStatusPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  back() {
    this.route.navigateByUrl('/tabs/dashboard');
  }

  check() {
    this.route.navigateByUrl('/tabs/statuspermohonanpembiayaan');
  }

  logout() {
    this.route.navigateByUrl('/login');
  }    
  
  


}
