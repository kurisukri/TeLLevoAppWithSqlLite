import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [EncabezadoComponent,FooterComponent],
  exports:[EncabezadoComponent,FooterComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ComponentsModule { }
