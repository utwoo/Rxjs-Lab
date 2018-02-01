var Rx = require('rxjs/Rx');

Rx.Observable.interval(500)
    .mapTo("Hi")
    .subscribe(console.log);