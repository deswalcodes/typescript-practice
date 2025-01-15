
function delayedCall(fn : () => void){
    setTimeout(fn,5000)

}

delayedCall(() => {
    console.log('hello')
})

