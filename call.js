obj={
    name:"shivam",
    age:"23"
}

function show(state){
    console.log(`hii ${this.name} , yoy are ${this.age} year old and you r from ${state}`)
}
// console.log(show.call(obj,"delhi"))

Function.prototype.myCall=function(context,...args){
    console.log(this)
       context.show=this
       context.show(...args)
       delete context.show
}
show.myCall(obj,"delhi")
console.log(obj)