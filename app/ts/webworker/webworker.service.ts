import { Injectable } from '@angular/core';
@Injectable()
export class WebWorkerService{
    
    private webWorker: any;

    constructor(){
        this.webWorker=new Worker('./app/js/webworker/jscript.js');        
    }

    public getRandomNumbers(count: number): Promise<number>{

        this.webWorker.onmessage((random_num)=>{
            return Promise.resolve(random_num);
        });

        this.webWorker.postmessage(count);

    }

}