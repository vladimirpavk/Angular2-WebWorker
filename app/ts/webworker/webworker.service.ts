import { Injectable } from '@angular/core';
@Injectable()
export class WebWorkerService{
    
    private webWorker: any;
    private current_value: number = 0;

    constructor(){
        //initialize and configure Web Worker
        this.webWorker=new Worker('./app/js/webworker/jscript.js');        
        console.log("Service constructor...");
        
        this.webWorker.onmessage=((message_event_data)=>{            
            console.log('From this.webWorker.onmessage '+message_event_data.data);
            this.current_value=message_event_data.data;
            this.returnPromise();
        });
    }

    public getRandomNumbers(count: number): any{                       
        this.webWorker.postMessage(count);
    }

    public returnPromise():Promise<number[]>{
        console.log("From returnPromise :"+this.current_value);
        return Promise.resolve<number[]>(this.current_value);
    }

}