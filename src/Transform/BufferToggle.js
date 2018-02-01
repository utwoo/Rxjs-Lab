var Rx = require('rxjs/Rx');

const source$ = Rx.Observable.interval(500);
const open$ = Rx.Observable.interval(1500);
const close$ = Rx.Observable.interval(1000);

const foo$ = source$.bufferToggle(open$, () => close$);

foo$.subscribe(x => console.log(x));

/**
---0---1---2---3---4---5---6---7---8---9----....    (source)

-----------1-----------2-----------3--------...      (open)

           --- ---x    --- ---x    --- ---x...      (close)
 
           bufferToggle(open$, () => close$)
        
------------------([2,3])-----([5.6])-----([8,9])--...
**/