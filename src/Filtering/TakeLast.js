var Rx = require('rxjs/Rx');

Rx.Observable.range(1, 100)
    .takeLast(10)
    .subscribe(x => console.log(x));