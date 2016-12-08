"use strict";
class WebWorker {
    constructor() {
        this.webWorker = new Worker('./app/js/jscript.js');
        this.webWorker.onmessage = ((e) => {
            console.log('from ts: ' + e.data);
        });
        this.webWorker.postMessage(30);
    }
}
exports.WebWorker = WebWorker;
//# sourceMappingURL=worker.js.map