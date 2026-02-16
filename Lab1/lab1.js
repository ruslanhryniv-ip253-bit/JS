function isInteger(num) {
  if (num % 1 === 0) {
    return true;
  }
  return false;
}
console.log(isInteger(4));  //true
console.log(isInteger(1.5)); 

function findPrimes(a, b) {
  let allPrimeNums = [];
  for (let i = a; i <= b; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      allPrimeNums.push(i);
    }
  }
  return allPrimeNums;
}

console.log(findPrimes(1, 32));