var Rx = require('rxjs/Rx');

Rx.Observable.timer(1000, 3000)
    .subscribe(x => console.log(x))