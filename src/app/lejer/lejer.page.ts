import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lejer',
  templateUrl: './lejer.page.html',
  styleUrls: ['./lejer.page.scss'],
})
export class LejerPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  lejer() {
    this.router.navigateByUrl('tabs/penyata');
  }
  back() {
    this.router.navigateByUrl('/tabs/senarai');
  }
  logout() {
    this.router.navigateByUrl('/login');
  }
  jadual(){
    this.router.navigateByUrl('/jaduabayarbalik');
  }
}
