import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[{
  path: '',
  component: TabsPage,
  children: [
    {
      path: 'home',
      loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'ani1',
      loadChildren: () => import('../ani1/ani1.module').then( m => m.Ani1PageModule)
    },
    {
      path: 'ani2',
      loadChildren: () => import('../ani2/ani2.module').then( m => m.Ani2PageModule)
    }
  ]
}];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
