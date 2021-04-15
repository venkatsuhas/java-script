Array.prototype.myMap=function(maps){
    const arr=[];
    for(let i=0;i<this.length;i++){
        const result = maps(this[i],i,this);
        arr.push(result);
    }
    return arr;
};
const arr=[3,8,5,7,2,6];
let result=arr.myMap(b=>b*2);
console.log(result);