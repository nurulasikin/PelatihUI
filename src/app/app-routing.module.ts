import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
  // {
  //   path: '',
  //   loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  // },

    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'daftar-baru',
    loadChildren: () => import('./daftar-baru/daftar-baru.module').then( m => m.DaftarBaruPageModule)
  },
  {
    path: 'statuspermohonanpembiayaan',
    loadChildren: () => import('./statuspermohonanpembiayaan/statuspermohonanpembiayaan.module').then( m => m.StatuspermohonanpembiayaanPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
 
  {
    path: 'jaduabayarbalik',
    loadChildren: () => import('./jaduabayarbalik/jaduabayarbalik.module').then( m => m.JaduabayarbalikPageModule)
  },
  {
    path: 'kemaskini',
    loadChildren: () => import('./kemaskini/kemaskini.module').then( m => m.KemaskiniPageModule)
  },
  {
    path: 'swiper',
    loadChildren: () => import('./swiper/swiper.module').then( m => m.SwiperPageModule)
  },
 
  
  
  
  
 
 
  
  // {
  //   path: 'bayaran',
  //   loadChildren: () => import('./bayaran/bayaran.module').then( m => m.BayaranPageModule)
  // },
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
