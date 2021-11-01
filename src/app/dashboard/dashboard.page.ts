import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore,{SwiperOptions, Pagination, Autoplay, Swiper} from 'swiper';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  public swiperConfig: SwiperOptions={
    pagination:true,
  };

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
    Swiper.use([Pagination]);
    SwiperCore.use([Autoplay]);
  }
  sejarahpembayaran() {
    this.route.navigateByUrl('/tabs/sejarah-pembayaran');
  }
  semakanstatus(){
    this.route.navigateByUrl('/tabs/semakan-status');
  }
  kalkulatorpembiayaan(){
    this.route.navigateByUrl('/tabs/kalkulator-pembiayaan');
  }
  
  ledger(item) {
    this.route.navigateByUrl('/tabs/lejer');
    console.log(item);
  }
  onSlideChange() {
    console.log('slide change');
  }
  logout(){
    this.route.navigateByUrl('/homepage');

    }
  back(){
    this.route.navigateByUrl('/login');
  }

  next(){
  this.route.navigateByUrl('tabs/profil');
  } 


}
