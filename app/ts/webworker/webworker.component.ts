import { Component, OnInit, Input } from '@angular/core';
import { JS_Worker } from './worker';
@Component({
    selector: 'webworker',
    templateUrl: './app/ts/webworker/webworker.component.html'
})
export class WebWorkerComponent implements OnInit{
    @Input() count: number;      
    @Input() worker_name: string;

    @Input() cur_value: number;

    private mojaPcelica: JS_Worker;

    ngOnInit(){
        console.log("init");
        this.InitializeCurValue();
        console.log(this.worker_name+" "+this.count+" "+this.cur_value);        
        
        this.mojaPcelica=new JS_Worker('./app/js/webworker/jscript.js', this.myCallBack, 50);        
    }

    private InitializeCurValue(){
        this.cur_value=5;
        console.log(this.cur_value);
    }

    public myCallBack(e):void
    {
        /*console.log(e.data);
        this.cur_value=this.cur_value+1;
        console.log("cur_value :"+this.cur_value);*/
        //console.log(this.cur_value);
        this.InitializeCurValue();
    }
}