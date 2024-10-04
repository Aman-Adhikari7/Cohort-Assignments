/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

console.log('hehe is good boy')

function sleep(milliseconds){

    return new Promise( (resolve ) => {
      
            const hehe= Date.now()
            while(Date.now()-hehe < milliseconds ){
                resolve()
            }
          
            })
    
}

sleep(6000).then(()=>{
    console.log('thread was buy')
})

console.log("you failed ")


