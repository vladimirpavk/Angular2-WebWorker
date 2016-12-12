import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class WebWorkerService{
    
    private _webWorker: any;
    private _current_value: number = 0;
    private _max_value: number;
    public _percent_done: number = 0;
    public _prev_precent_done: number = 0;

    public numberGenerated: EventEmitter<number>;

    constructor(){        
        this.numberGenerated=new EventEmitter();
        
        //initialize and configure Web Worker
        this._webWorker=new Worker('./app/js/webworker/jscript.js');        
     
        this._webWorker.onmessage=((val)=>{
            this._current_value++;
            this._percent_done=Math.round((this._current_value/this._max_value)*100);
            if( this._percent_done != this._prev_precent_done ){
                this._prev_precent_done=this._percent_done;
                this.numberGenerated.emit(this._percent_done);
            }          
        });                
    }

    public getRandomNumbers(count: number): any{
        this._max_value= count;                       
        this._webWorker.postMessage(count);        
    }   
}