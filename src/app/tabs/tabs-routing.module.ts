import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'bayaran',
        loadChildren: () => import('../bayaran/bayaran.module').then( m => m.BayaranPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'senarai',
        loadChildren: () => import('../senarai/senarai.module').then( m => m.SenaraiPageModule)
      },
      {
        path: 'sejarah-pembayaran',
        loadChildren: () => import('../sejarah-pembayaran/sejarah-pembayaran.module').then( m => m.SejarahPembayaranPageModule)
      },
      {
        path: 'semakan-status',
        loadChildren: () => import('../semakan-status/semakan-status.module').then( m => m.SemakanStatusPageModule)
      },
      {
        path: 'kalkulator-pembiayaan',
        loadChildren: () => import('../kalkulator-pembiayaan/kalkulator-pembiayaan.module').then( m => m.KalkulatorPembiayaanPageModule)
      },
      {
        path: 'lejer',
        loadChildren: () => import('../lejer/lejer.module').then( m => m.LejerPageModule)
      },
      {
        path: 'penyata',
        loadChildren: () => import('../penyata/penyata.module').then( m => m.PenyataPageModule)
      },
      {
        path: 'butiran-pembayaran',
        loadChildren: () => import('../butiran-pembayaran/butiran-pembayaran.module').then( m => m.ButiranPembayaranPageModule)
      },
      {
        path: 'profiledit',
        loadChildren: () => import('../profiledit/profiledit.module').then( m => m.ProfileditPageModule)
      },
      {
        path: 'statuspermohonanpembiayaan',
        loadChildren: () => import('../statuspermohonanpembiayaan/statuspermohonanpembiayaan.module').then( m => m.StatuspermohonanpembiayaanPageModule)
      },
      {
        path: 'kemaskinikatalaluan',
        loadChildren: () => import('../kemaskinikatalaluan/kemaskinikatalaluan.module').then( m => m.KemaskinikatalaluanPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
