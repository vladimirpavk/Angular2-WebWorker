export class WebWorker{
    public webWorker: any;

    constructor(){
        this.webWorker=new Worker('./app/js/jscript.js');

        this.webWorker.postMessage(30);

        this.webWorker.onmessage=((e)=>{
            console.log('from ts: '+e.data);
        })        
    }
}