/** 源 Observable 发生错误, 这个方法不会传播错误而是会不 
 *  断的重新订阅源 Observable 直到达到最大重试次数 */
var Rx = require('rxjs/Rx');

const r$ = Rx.Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.error('hello');
}).retry(2);

r$.subscribe(console.log); // 1,2,1,2,1,2,ERROR!