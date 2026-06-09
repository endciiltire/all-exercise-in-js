const num1 = [1, 2, 3];
const num2 = [...num1, 4, 5, 6];
console.log(num2); 

console.log("================");

function mult(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

console.log(mult(1, 2, 3,4)); 
