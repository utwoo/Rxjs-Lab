/** 将 Observable 序列转换为数组。 */
var Rx = require('rxjs/Rx');

var array = Rx.Observable.create((observer) => {
        observer.next(1);
        observer.next(2);
        observer.complete();
    }).toArray()
    .subscribe(console.log);
