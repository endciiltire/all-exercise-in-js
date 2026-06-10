

function dire(){
    return new Promise((resolve, recject)=>
    {
        setTimeout(()=>{
            const ms= false;
            if (ms) {
                return resolve ("waad xasan atahay")
                
            }
            else{
                recject("waa khaldan thay")
            }
        },2000)

    })


}


dire()
.then((date) => console.log(date))
.catch((error) =>console.log(error))


















// function getDeta(){
//     return new Promise(
//         (resolve, recject) => {
//             setTimeout(()=>{
//                 const guul = false;
//                 if (guul) {
//                     resolve( "sucess");
                    
//                 }else {
//                     recject("this is failed");
//                 }
//             },2000
//         )
//         }
//     )
// }

// getDeta()
// .then((toosan)=>console.log(toosan))
// .catch((err)=> console.log(err) )