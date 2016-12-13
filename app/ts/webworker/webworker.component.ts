import { Component, OnInit, Input } from '@angular/core';
import { WebWorkerService } from './webworker.service';
import { NumberService } from './number.service';
@Component({
    selector: 'webworker',
    templateUrl: './app/ts/webworker/webworker.component.html',
    providers: [ WebWorkerService, NumberService ],       
})
export class WebWorkerComponent implements OnInit{      
    @Input() count: number = 0; 
    @Input() worker_name: string;

    public cur_value: number = 10;
    private cur_number: number = 0;

    constructor(private webWorkerService:WebWorkerService,
    private numberService: NumberService
    ){        
    
    }


    ngOnInit(){
        console.log("init");  
        console.log(this.worker_name+" "+this.count+" "+this.cur_value);                     

         this.webWorkerService.numberGenerated.subscribe((value)=>{
                this.cur_number=value;
                console.log("From cur_value: "+this.cur_value);
            });                                          
         this.webWorkerService.getRandomNumbers(this.count);


         this.numberService.numberGenerated.subscribe((val)=>{
             this.cur_number=Math.round(val*100);
             console.log("From cur_number :"+this.cur_number);
         });
         this.numberService.generateNumbers();

    }   

    public dugme1_click():void{
        //this.cur_value+=10;
    }
}