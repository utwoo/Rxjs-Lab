var Rx = require('rxjs/Rx');

Rx.Observable.timer(0, 50)
    .buffer(Rx.Observable.interval(125))
    .take(3)
    .subscribe(x => console.dir(x)); //[ 0, 1, 2 ][ 3, 4 ][ 5, 6, 7 ]
