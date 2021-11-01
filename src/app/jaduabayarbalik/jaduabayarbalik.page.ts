import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jaduabayarbalik',
  templateUrl: './jaduabayarbalik.page.html',
  styleUrls: ['./jaduabayarbalik.page.scss'],
})
export class JaduabayarbalikPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  lejer() {
    this.router.navigateByUrl('tabs/penyata');
  }
  back() {
    this.router.navigateByUrl('/tabs/lejer');
  }
  logout() {
    this.router.navigateByUrl('/login');
  }

}
