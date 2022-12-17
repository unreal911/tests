import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { ImgComponent } from './components/img/img.component';
import { Tests1Component } from './pages/tests1/tests1.component';
import { RouterModule } from '@angular/router';
import { Tests2Component } from './pages/tests2/tests2.component';
@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    Tests1Component,
    Tests2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatListModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
