import { Component, OnInit, Input } from '@angular/core';
import { WebWorkerService } from './webworker.service';
@Component({
    selector: 'webworker',
    templateUrl: './app/ts/webworker/webworker.component.html',
    providers: [ WebWorkerService ]    
})
export class WebWorkerComponent implements OnInit{
    @Input() count: number;      
    @Input() worker_name: string;

    private cur_value: number = 5;

    constructor(private webWorkerService:WebWorkerService){}

    ngOnInit(){
        console.log("init");  
        console.log(this.worker_name+" "+this.count+" "+this.cur_value);                     

        this.webWorkerService.numberGenerated.subscribe((value)=>console.log("From component :"+value));

        this.webWorkerService.getRandomNumbers(this.count);
    }  
}