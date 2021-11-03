import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ani3PageRoutingModule } from './ani3-routing.module';

import { Ani3Page } from './ani3.page';
import { AppModuleModule } from 'src/app/app-module.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ani3PageRoutingModule,
    AppModuleModule
  ],
  declarations: [Ani3Page]
})
export class Ani3PageModule {}
