/** 就像是delay, 但是延时的时间间隔由第二个Observable决定. */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .delayWhen((x) => {
            return Rx.Observable.interval(Math.random() * 5000); // every emit delay
        },
        Rx.Observable.interval(20000) // subscribe delay
    )
    .subscribe(console.log);