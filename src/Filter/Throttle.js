var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .throttle(x => Rx.Observable.interval(2000))
    .subscribe(x => console.log(x));