import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-penyata',
  templateUrl: './penyata.page.html',
  styleUrls: ['./penyata.page.scss'],
})
export class PenyataPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  lejer() {
    this.router.navigateByUrl('tabs/penyata');
  }
  back() {
    this.router.navigateByUrl('tabs/lejer');
  }
  logout() {
    this.router.navigateByUrl('/login');
  }

}
