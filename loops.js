let result = 0;

function PrintNumbers(n) {
  if (n >= 0) {
    PrintNumbers(n - 1);
    result = result + n;
  }
}
PrintNumbers(10);
console.log(result);
