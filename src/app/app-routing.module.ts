import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { Menu1Module } from './menu1/menu1.module';

const routes: Routes = [{ path: '', component: MenuModule },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'home', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) }, { path: 'menu1', loadChildren: () => import('./menu1/menu1.module').then(m => m.Menu1Module) }, { path: 'offer', loadChildren: () => import('./offer/offer.module').then(m => m.OfferModule) }, { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
