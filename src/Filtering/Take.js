var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .take(5)
    .subscribe(x => console.log(x));