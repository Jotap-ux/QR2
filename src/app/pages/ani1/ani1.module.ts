import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ani1PageRoutingModule } from './ani1-routing.module';

import {Ani1Page} from './ani1.page';

import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ani1PageRoutingModule,
    AppModuleModule
  ],
 
  declarations: [Ani1Page]
})
export class Ani1PageModule {}
