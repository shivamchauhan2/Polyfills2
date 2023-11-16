let arr=[1,2,5,6,3,5]
sum=(acc,cur)=>{
    return acc+cur;
}
Array.prototype.myReduce=function(callback,initial){
    let acc=initial || this[0]
    // console.log(this)
    for(let i=initial?0:1; i<this.length ;i++ ){
        // console.log(this[i])
        acc = callback(acc,this[i])
    }
  return acc
}
let sumOfArray= arr.myReduce(sum,0)
console.log(sumOfArray)