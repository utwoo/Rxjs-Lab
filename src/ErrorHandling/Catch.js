/** 捕获 observable 中的错误，可以通过返回一个新的 observable 或者抛出错误对象来处理。 */
var Rx = require('rxjs/Rx');

const r$ = Rx.Observable.create((observer) => {
        observer.next(1);
        observer.next(2);
        observer.error('error');
        observer.next(3);
    })
    .catch((err, caught) => {
        console.log("Error:", err);
        return caught.take(2); // retry itself
    })
    .subscribe(console.log);