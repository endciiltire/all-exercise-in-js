

// async function xogtajson1() {
//     console.log("welcome to json information");
//     const data = await fetch('./data.json');

//     console.log("this is the result",data);
//     const date= await data.Json();
//     console.log("thise date not data",date)
    
// }
// xogtajson1()     
//kan waa ii shaqeeyn waayay
  

async function xogtajson1() {
    console.log("welcome to json information");

    const data = await fetch('https://jsonplaceholder.typicode.com/posts');

    console.log("this is the result", data);

    const dataJson = await data.json();

    console.log("this is data", dataJson [0].body);
}

xogtajson1();