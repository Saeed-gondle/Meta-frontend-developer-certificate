const fabonacci = number => {
    return number <= 1 ? number : fabonacci(number - 1) + fabonacci(number - 2);
}
console.log(fabonacci(10)); 