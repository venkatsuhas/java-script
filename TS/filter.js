Array.prototype.myFilter=function(filters){
    const arr=[];
    for(let i=0;i<this.length;i++){
        const result = filters(this[i],i,this);
        if(result)
        arr.push(this[i]);
    }
    return arr;
};
const arr=[3,8,5,7,2,6];
let result=arr.myFilter(b=>b%2===0);
console.log(result);