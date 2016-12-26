/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { WebWorkerComponent } from './webworker/webworker.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WebWorkerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }