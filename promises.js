var primes = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var arr=[];
            let c=0;
            for(var i=a;i<=b;i++)
            {
                if(isprime(i))
                {
                    arr[c]=i;
                    c++;
                }
            }
            resolve(arr);
        },3000);
    });
}
var isprime = (i) =>{
    let count=0;
    for(let j=1;j<=i;j++)
    {
        if(i%j==0)
        count++;
    }
    if(count==2)
    return true; 

}
var call=()=>{

var promise=primes(1,100);
promise
.then((result)=>console.log(result));

promise=primes(1,50);
promise
.then((result)=>console.log(result));

promise=primes(1,10);
promise
.then((result)=>console.log(result));
}

call();