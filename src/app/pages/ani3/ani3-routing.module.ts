import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ani3Page } from './ani3.page';

const routes: Routes = [
  {
    path: '',
    component: Ani3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ani3PageRoutingModule {}
