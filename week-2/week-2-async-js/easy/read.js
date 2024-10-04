const fs = require ('fs')
// fs.readFile('a.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("error happend ",err)
//     }else{
//         console.log(data)
//     }
// })

const data = fs.readFileSync('a.txt', 'utf8');
console.log(data);   

const expnesiveop= ()=>{
    let sum ;

    for(let i=0;i<1000000000; i++){
      sum+=i
    }
    console.log('operation done ')
}
expnesiveop()






    




