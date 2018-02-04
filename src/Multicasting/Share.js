/** share && publish + refCount */
var Rx = require('rxjs/Rx');

//var connect$ = Rx.Observable.interval(1000).take(4).share(); // share() will re-emit when complete
var connect$ = Rx.Observable.interval(1000).take(4).publish().refCount(); //publish().refCount() will  not re-emit when complete

connect$.subscribe(v => console.log("T1:", v));

setTimeout(() => {
    connect$.subscribe(v => console.log("T2:", v));
}, 5000);

// share(): T1:0 1 2 3  T2:0 1 2 3 
// publish().refCount(): T1:0 1 2 3