function reverse(arr) {
    var newArr = [];
    // Tomara el indice 4 del arreglo y colocara dentro del nuevo arreglo, 
    // de esta forma lo invertira
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
