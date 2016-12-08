import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'webworker',
    templateUrl: './app/ts/webworker/webworker.component.html'
})
export class WebWorkerComponent implements OnInit{
    @Input() count: number;
    @Input() cur_value: number;    
    @Input() worker_name: string;

    ngOnInit(){
        console.log("init");
        console.log(this.worker_name+" "+this.count+" "+this.cur_value);
    }
}