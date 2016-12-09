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

        this.webWorkerService.returnPromise().subscribe((randomNum)=>{
            this.cur_value++;
            console.log('from returnPromise(): '+this.cur_value);
        });

         this.webWorkerService.getRandomNumbers(this.count);
         
         
         
        
        //this.webWorkerService.getRandomNumbers(this.count);
       
        //this.mojaPcelica=new JS_Worker('./app/js/webworker/jscript.js', this.myCallBack, 50);        
    }
    
    public myCallBack(e):void
    {
        /*console.log(e.data);
        this.cur_value=this.cur_value+1;
        console.log("cur_value :"+this.cur_value);*/
        //console.log(this.cur_value);    
    }
}