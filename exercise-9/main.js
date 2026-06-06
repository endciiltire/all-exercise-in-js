
let car ={
    make: "japan",
    model: "toyota",
    year: "2000",
    start: function(){
        console.log("The car has started"+ " " +this.make +"  " +this.model +"  "+this.year)
    }

}

console.log(car.start())