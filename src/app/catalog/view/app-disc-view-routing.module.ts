
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDiscViewContainer } from './app-disc-view.container';

const routes: Routes = [
  {
    path: '',
    component: AppDiscViewContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDiscViewRoutingModule { }
