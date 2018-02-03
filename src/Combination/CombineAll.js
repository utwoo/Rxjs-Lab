/** 当高阶 Observable 完成时，通过使用 combineLatest 将其打平。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(100).take(2)
    .map((valueOuter) => {
        if (valueOuter === 0) {
            return Rx.Observable.timer(1000, 100).take(3).map(x => "x" + x);
        } else {
            return Rx.Observable.timer(0, 1500).take(3).map(y => "y" + y);
        }
    })
    .combineAll()
    .subscribe(console.dir);
/** 
 [ 'x0', 'y0' ]
 [ 'x1', 'y0' ]
 [ 'x2', 'y0' ]
 [ 'x2', 'y1' ]
 [ 'x2', 'y2' ]
*/

