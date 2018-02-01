var Rx = require('rxjs/Rx');

Rx.Observable.interval(500)
    .map(x => x * x)
    .subscribe(console.log);