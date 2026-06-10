

function dire(){
    return new Promise((resolve, recject)=>
    {
        setTimeout(()=>{
            const ms= false;
            if (ms) {
              resolve ({id: 121, name: "mohamed hassan ali", class: "b23", facult: "computer sceince and information technology"})
                
            }
            else{
                recject("some thing is wrong ")
            }
        },2000)

    })


}


async function dugsiye () {
    try{
    const user = await dire();
    console.log(user)
    }catch(err){
        console.log(err)
    }
}

dugsiye()


