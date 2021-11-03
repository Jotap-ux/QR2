import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ani4PageRoutingModule } from './ani4-routing.module';

import { Ani4Page } from './ani4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ani4PageRoutingModule
  ],
  declarations: [Ani4Page]
})
export class Ani4PageModule {}
