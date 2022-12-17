import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tests1Component } from './pages/tests1/tests1.component';
import { Tests2Component } from './pages/tests2/tests2.component';

const routes: Routes = [
  {
    path:'test1',component:Tests1Component,

  },
  {
    path:'test2',component:Tests2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
