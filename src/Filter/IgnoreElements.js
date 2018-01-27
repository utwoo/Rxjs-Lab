var Rx = require('rxjs/Rx');

Rx.Observable.of(1, 3, 2, 5, 4, 7, 6, 9, 1)
    .ignoreElements()
    .subscribe(x => console.log(x))