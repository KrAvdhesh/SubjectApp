import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component5Component } from './component5/component5.component';

const routes: Routes = [
  {path:'StandaloneComp5',component:Component5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
