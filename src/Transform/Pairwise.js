/** 将当前值和前一个值作为数组放在一起，然后将其发出。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(500)
    .pairwise()
    .take(5)
    .subscribe(console.dir);