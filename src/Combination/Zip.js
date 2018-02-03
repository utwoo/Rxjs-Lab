/** 每当源 Observable 发出值，它会计算一个公式，此公式使用该值加上其他输入 Observable 的最新值，然后发出公式的输出结果。 */
var Rx = require('rxjs/Rx');

let age$ = Rx.Observable.of(27, 25, 29);
let name$ = Rx.Observable.of('Foo', 'Bar', 'Beer');
let isDev$ = Rx.Observable.of(true, true, false, false);

Rx.Observable.zip(age$, name$, isDev$,
        (age, name, isDev) => ({
            name: name,
            age: age,
            isDev: isDev
        }))
    .subscribe(console.dir);