var Rx = require('rxjs/Rx');

const connect$ = Rx.Observable.interval(500).take(5).publishBehavior('- start -');

connect$.subscribe(x => console.log("x:", x));
connect$.subscribe(y => console.log("y:", y));

console.log('-- connect begin --');
connect$.connect();