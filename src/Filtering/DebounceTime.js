var Rx = require('rxjs/Rx');

Rx.Observable.interval(1500)
    .debounceTime(1000)
    .subscribe(x => console.log(x));