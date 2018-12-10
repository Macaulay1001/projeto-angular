import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoguinComponent } from './loguin/loguin.component';

const routes: Routes = [
  {path: 'user/macaulay', component: LoguinComponent},
  {path: '', redirectTo: '/user/macaulay', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}