let arr=[2,5,7,3,6,2]
squareOfNumbers=(num)=>{
   return num**2
}
// console.log(arr.map(squareOfNumbers))

Array.prototype.myMap=function(callback){
    let newArray=[]
    for(let i=0; i<this.length;i++){
       newArray.push(callback(this[i]))
    }
    return newArray
}
let squareOfArray= arr.myMap(squareOfNumbers)
console.log(squareOfArray)