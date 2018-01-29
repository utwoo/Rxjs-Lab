var Rx = require('rxjs/Rx');

// Rx.Observable.interval(100)
//     .bufferTime(250)
//     .take(4)
//     .subscribe(x => console.log(x)); //[ 0, 1 ][ 2, 3, 4 ][ 5, 6 ][ 7, 8, 9 ]

// Rx.Observable.interval(100)
//     .bufferTime(250, 500)
//     .take(4)
//     .subscribe(x => console.log(x)); //[ 0, 1 ][ 4, 5, 6 ][ 9, 10, 11 ][ 14, 15, 16 ]

Rx.Observable.interval(100)
    .bufferTime(250, 500, 2)
    .take(4)
    .subscribe(x => console.log(x)); //[ 0, 1 ][ 4, 5 ][ 9, 10 ][ 14, 15 ]
