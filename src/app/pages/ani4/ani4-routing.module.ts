import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ani4Page } from './ani4.page';

const routes: Routes = [
  {
    path: '',
    component: Ani4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ani4PageRoutingModule {}
