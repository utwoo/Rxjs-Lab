var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .audit((x) => Rx.Observable.interval(x * 1000))
    .subscribe(x => console.log(x));