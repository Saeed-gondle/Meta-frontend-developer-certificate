const fabonacci = number => {
    return number <= 1 ? number : fabonacci(number - 1) + fabonacci(number - 2);
}
console.log(fabonacci(10)); 
const displayTable = number => {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}\n`;
    }
    return table;
}
console.log(displayTable(5));