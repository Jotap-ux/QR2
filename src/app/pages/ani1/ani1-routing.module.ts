import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ani1Page } from './ani1.page';

const routes: Routes = [
  {
    path: '',
    component: Ani1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ani1PageRoutingModule {}
