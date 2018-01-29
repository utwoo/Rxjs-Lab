var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .bufferCount(2)
    .take(4)
    .subscribe(x => console.dir(x)); //[ 0, 1 ][ 2, 3 ][ 4, 5 ][ 6, 7 ]

Rx.Observable.interval(100)
    .bufferCount(2, 3) //(每次buffer的数量，间隔多少buffer一次)
    .take(4)
    .subscribe(x => console.dir(x)); //[ 0, 1 ][ 3, 4 ][ 6, 7 ][ 9, 10 ]
