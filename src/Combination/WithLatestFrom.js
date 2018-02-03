/** 每当源 Observable 发出值，它会计算一个公式，此公式使用该值加上其他输入 Observable 的最新值，然后发出公式的输出结果。 */
var Rx = require('rxjs/Rx');

const x$ = Rx.Observable.interval(250).take(5).map(x => "x" + x);
const y$ = Rx.Observable.interval(500).take(5).map(y => "y" + y);

x$.withLatestFrom(y$).subscribe(console.dir);
/** 
 [ 'x1', 'y0' ]
 [ 'x2', 'y0' ]
 [ 'x3', 'y1' ]
 [ 'x4', 'y1' ]
 */