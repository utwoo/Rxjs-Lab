var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .throttleTime(2000)
    .subscribe(x => console.log(x));