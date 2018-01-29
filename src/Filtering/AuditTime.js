var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .auditTime(2000)
    .subscribe(x => console.log(x));