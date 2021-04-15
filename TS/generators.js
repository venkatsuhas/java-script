function* genPrime(n) {
        for (var i = 2; i < n; i++) {
            if (isPrime(i)){
                yield i;
            }
        }
    }
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const generatorObject = genPrime(10);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
    // console.log(generatorObject.next().value);