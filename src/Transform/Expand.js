var Rx = require('rxjs/Rx');

Rx.Observable.of(2)
    .expand((value, index) => {
        return Rx.Observable.of(2 * value).delay(1000);
    })
    .subscribe(console.log);