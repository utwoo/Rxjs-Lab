var Rx = require('rxjs/Rx');

Rx.Observable.of(1, 2, 3, 2, 3, 4, 1, 6, 5, 5, 4, 3, 2, 3, 2, 1)
    .distinct()
    .subscribe(x => console.log(x));
    