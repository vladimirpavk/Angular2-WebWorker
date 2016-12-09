"use strict";
export class JS_Worker {

    private webWorker: any;

    constructor(private script_file: string, private onMessageCallback:any, private generateNumbers: number  ) 
    {
        this.webWorker = new Worker(this.script_file);
        this.webWorker.onmessage=((e)=>onMessageCallback(Promise.resolve(e)));
        this.webWorker.postMessage(this.generateNumbers);        
    }
}