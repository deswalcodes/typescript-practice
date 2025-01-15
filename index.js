"use strict";
function delayedCall(fn) {
    setTimeout(fn, 5000);
}
delayedCall(() => {
    console.log('hello');
});
