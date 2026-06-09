 
 bloock 
 function bloock(){
    alert("waay aa soo daahday");
console.log("anigana waan jiray")

 }
 console.log("before alert");
 bloock();

 
 console.log(" this non block code star here !  ");


 // non block
 function nonBlock(callback){
    setTimeout(()=>{
        const data={name: "omor tod", work: "teacher and system dev, youtube " }
        callback(data);
    },2000)
 }
 console.log("this is a good job");
 nonBlock(function(data){
    console.log(data)
 })