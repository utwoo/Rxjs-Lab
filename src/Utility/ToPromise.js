/** 将 Observable 序列转换为符合 ES2015 标准的 Promise 。 */
var Rx = require('rxjs/Rx');

console.log('-- Promise --')
var array = Rx.Observable.create((observer) => {
        observer.next(1);
        observer.next(2);
        observer.complete();
    }).toPromise()
    .then(x => console.log(x)); // 返回Observable序列的最后一个值

console.log('-- Promise with Error --')
var array = Rx.Observable.create((observer) => {
        observer.next(1);
        observer.error(('error!'));
    }).toPromise()
    .then(x => console.log(x))
    .catch(err => console.log("ERROR:", err));