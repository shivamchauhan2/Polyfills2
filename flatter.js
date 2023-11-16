let arr=[1,2,3,4,[5,6],[[[[7,8]]]],9]
// console.log(arr.flat(Infinity))
Array.prototype.myFlat= function(depth=1){
    let newArr=[]
    // console.log(this)
    getflattered=(arr,depth)=>{
    for(let element of arr){
        // console.log("length for"+ element,this.length)
        if(Array.isArray(element) && depth){
           getflattered(element,depth-1)
        }else{
            newArr.push(element)
        }
    }
}
    getflattered(this,depth)
    return newArr
}
console.log(arr.myFlat(Infinity))