var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .sampleTime(2500)
    .subscribe(x => console.log(x));