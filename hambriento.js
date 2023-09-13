function siempreHambriento(arr) {
    var alimento = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            console.log("delicioso");
            alimento = true;
        }
    }

    if (!alimento) {
        console.log("Tengo hambre");
    }
}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


/* Función por si queremos evaluar cada uno de los elementos en el arreglo.
function siempreHambriento(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            console.log("delicioso");
        } else if (arr[i] !== "comida") {
            console.log("Tengo hambre");
        }
    }
}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

*/