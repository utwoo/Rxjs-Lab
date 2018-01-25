var Rx = require('rxjs/rx');

var result = Rx.Observable.from([1, 2, 3]).repeat(3);
result.subscribe(x => console.log(x));