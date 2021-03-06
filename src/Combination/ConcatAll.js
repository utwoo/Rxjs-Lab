/** 通过一个接一个的连接内部 Observable ，将高阶 Observable 打平。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(100).take(2)
    .map((valueOuter) => {
        if (valueOuter === 0) {
            return Rx.Observable.timer(1000, 100).take(3).map(x => "x" + x);
        } else {
            return Rx.Observable.timer(0, 1500).take(3).map(y => "y" + y);
        }
    })
    .concatAll()
    .subscribe(console.dir);
/** 'x0'-'x1'-'x2'-'y0'-'y1'-'y2' */