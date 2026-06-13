 async function fechdata() {
    try{
    console.log("this is a data ")
    const response= await fetch('https://jsonplaceholder.typicode.com/posts/2')
  if (!response.ok) {
    throw new error(`this error ${response.status}`);
    
   }
   const data =await response.json();
   console.log(data)

   
 }catch(error){
  console.log(error)
   }
 }
 
 fechdata()