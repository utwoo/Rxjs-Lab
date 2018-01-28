var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .takeUntil(Rx.Observable.of(1).delay(4000))
    .subscribe(x => console.log(x));