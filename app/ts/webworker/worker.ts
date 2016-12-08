"use strict";
export class JS_Worker {

    private webWorker: any;

    constructor(private script_file: string, private onMessageCallback:any, private generateNumbers: number  ) 
    {
        this.webWorker = new Worker(this.script_file);
        this.webWorker.onmessage=((e)=>onMessageCallback(e));
        this.webWorker.postMessage(this.generateNumbers);


        /*this.webWorker = new Worker('./app/js/jscript.js');
        this.webWorker.onmessage = ((e) => {
            console.log('from ts: ' + e.data);
        });
        this.webWorker.postMessage(30);*/
    }
}