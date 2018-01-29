var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .takeWhile(x => x < 6)
    .subscribe(x => console.log(x));