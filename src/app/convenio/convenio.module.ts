import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvenioPageRoutingModule } from './convenio-routing.module';

import { ConvenioPage } from './convenio.page';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvenioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConvenioPage]
})
export class ConvenioPageModule {}
