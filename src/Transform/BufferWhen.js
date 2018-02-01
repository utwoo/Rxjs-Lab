var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .bufferWhen(() => Rx.Observable.interval(2500))
    .subscribe(x => console.log(x));

