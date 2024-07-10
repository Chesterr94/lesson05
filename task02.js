const isPrime = (x) => {
  for (let i = 2; i < x; i++) {
    if (x % i!==0){
      console.log (x + ' Это простое число');
      return true;
    } else{
      console.log (x + ' Это сложное число');
      return false;
    }
  }
}
const x = (+prompt('Введите число для проверки'));

console.log(isPrime(x));

