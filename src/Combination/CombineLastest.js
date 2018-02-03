/** 它将使用所有输入中的最新值计算公式，然后发出该公式的输出。 */
var Rx = require('rxjs/Rx');

const x$ = Rx.Observable.interval(1000).take(5).map(x => "x" + x);
const y$ = Rx.Observable.interval(400).take(5).map(y => "y" + y);

x$.combineLatest(y$).subscribe(console.dir);
// [ 'x0', 'y1' ][ 'x0', 'y2' ][ 'x0', 'y3' ][ 'x1', 'y3' ][ 'x1', 'y4' ][ 'x2', 'y4' ][ 'x3', 'y4' ][ 'x4', 'y4' ]