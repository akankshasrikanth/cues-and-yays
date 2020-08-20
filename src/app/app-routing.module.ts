import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadyComponent } from './ready/ready.component';
import { Mcq1Component } from './mcq1/mcq1.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'ready', component: ReadyComponent},
  {path:'mcq', component:Mcq1Component},
  {path:'result', component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
