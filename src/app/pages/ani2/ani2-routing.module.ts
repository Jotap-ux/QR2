import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ani2Page } from './ani2.page';

const routes: Routes = [
  {
    path: '',
    component: Ani2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ani2PageRoutingModule {}
