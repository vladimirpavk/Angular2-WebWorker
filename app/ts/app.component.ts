/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { WebWorker } from './worker';
@Component({
  selector: 'my-app',
  templateUrl: './app/ts/app.component.html'
})
export class AppComponent implements OnInit{ 
  
  public worker:WebWorker;

  ngOnInit(){
      this.worker=new WebWorker();
  }
}