
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDiscViewRoutingModule } from './app-disc-view-routing.module';
import { AppDiscViewContainer } from './app-disc-view.container';
import { AppDiscViewHeaderComponent } from './components/disc-view-header/app-disc-view-header.component';
import { AppDiscViewContentComponent } from './components/disc-view-content/app-disc-view-content.component';

@NgModule({
  imports: [
    CommonModule,
    AppDiscViewHeaderComponent,
    AppDiscViewContentComponent,
    AppDiscViewRoutingModule
  ],
  declarations: [
    AppDiscViewContainer,
  ]
})
export class AppDiscViewModule {} 
