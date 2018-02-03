/** 通过顺序地发出多个 Observables 的值将它们连接起来，一个接一个的。 */
var Rx = require('rxjs/Rx');

const x$ = Rx.Observable.interval(1000).take(5).map(x => "x" + x);
const y$ = Rx.Observable.interval(300).take(5).map(y => "y" + y);

x$.concat(y$).subscribe(console.dir);