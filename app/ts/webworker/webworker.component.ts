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

    public cur_value: number = 10;

    constructor(private webWorkerService:WebWorkerService){        
    }


    ngOnInit(){
        console.log("init");  
        console.log(this.worker_name+" "+this.count+" "+this.cur_value);                     

        //this.webWorkerService.numberGenerated.subscribe(this.numberGenerated);
        this.webWorkerService.numberGenerated.subscribe((value)=>{
            this.cur_value=value;
            console.log("From cur_value: "+this.cur_value);
        });

        this.webWorkerService.getRandomNumbers(this.count);
    }  

    public numberGenerated(value:number){
            this.cur_value=value;
    }
}