  function createArray() {
  const numbers = [];

for (let i = 0; i <= 100; i++) {
    numbers[i] = i + 1;
    
    if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
        numbers [i] = "FizzBuzz";
        } else if (numbers[i] % 3 == 0) {
        numbers[i] = "Fizz";
        } else if (numbers [i] % 5 == 0) {
        numbers [i] = "Buzz";
        } else {
        numbers [i];
        }
    // console.log(numbers[i]);
    } 
    console.log(numbers);
    return numbers; 
}

createArray()
