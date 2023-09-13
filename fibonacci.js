function fibonacciArray(n) {
    // [0, 1] son los valores iniciales del arreglo para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    for (var i = 2; i < n; i++) {
        var siguienteFib = fibArr[i - 1] + fibArr[i - 2]; // 1 + 0 -> 2 + 1 -> 3 + 2 -> 5
        fibArr.push(siguienteFib);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
