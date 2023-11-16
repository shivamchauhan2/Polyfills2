let arr=[2,3,5,7,3,4]
flter=(Element)=>{
    return Element>=5
}
Array.prototype.myFilter= function(callback){
    let newArray=[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
let eqlORgrtFive= arr.myFilter(flter)
console.log(eqlORgrtFive)