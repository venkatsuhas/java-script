var primes = (a,b,cb)=>{
        let id=setInterval(()=>{
            for(var i=a;i<=b;i++)
            {
                if(i==b)
                clearInterval(id);
                cb(i);
            }
        },5000);
}
var isprime = (i) =>{
    let count=0;
    for(let j=1;j<=i;j++)
    {
        if(i%j==0)
        count++;
    }
    if(count==2)
    console.log(i); 

}
primes(1,100,isprime);
primes(1,50,isprime);
primes(1,10,isprime);