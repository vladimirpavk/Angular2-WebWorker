import { Component, OnInit, Input, NgZone } from '@angular/core';
import { WebWorkerService } from './webworker.service';

@Component({
    selector: 'webworker',
    templateUrl: './app/ts/webworker/webworker.component.html',
    providers: [ WebWorkerService ],       
})
export class WebWorkerComponent implements OnInit{      
    @Input() count: number = 0; 
    @Input() worker_name: string;

    private _cur_number: number = 0;

    constructor(private _webWorkerService:WebWorkerService, private _ngZone: NgZone){}


    ngOnInit(){     
        this._webWorkerService.numberGenerated.subscribe((value)=>{
                this._ngZone.run(()=>this._cur_number=value);
                console.log("From webworker.component.ts - _cur_number : ")                        
            });                                          
         this._webWorkerService.getRandomNumbers(this.count);
    }   
}