var Rx = require('rxjs/Rx');

var x$ = Rx.Observable.interval(1000).map(x => "x" + x).take(10);
var y$ = Rx.Observable.interval(2000).map(y => "y" + y).take(6);
var z$ = Rx.Observable.interval(500).map(z => "z" + z).take(10);
var concurrent = 2; // the argument
var merged = x$.merge(y$, z$, concurrent);
merged.subscribe(x => console.log(x));