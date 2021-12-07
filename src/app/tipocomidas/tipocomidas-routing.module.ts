import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipocomidasPage } from './tipocomidas.page';

const routes: Routes = [
  {
    path: '',
    component: TipocomidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipocomidasPageRoutingModule {}
