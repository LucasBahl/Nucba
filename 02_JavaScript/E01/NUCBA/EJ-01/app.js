// Array con los ingredientes
const ingredientes = ["harina", "salsa", "queso", "jamon", "huevos", "cebolla", "ajo", "tomate", "agua", "levadura"]
                            
//Muestro el array (ingredientes) por consola
console.log(ingredientes);

//Crear una función que acepte ese array como parámetro
function Pizza(ingredientes) {
    //Creo nuevos arrays para los "pares" e "impares"
    let ingredientesPares = [];
    let ingredientesImpares = [];

    for (let i = 0; i < ingredientes.length; i++) {
        //Recorre la función para determinar cantidad de letras de cada ingrediente
        const ingrediente = ingredientes[i].length;
        
        //Define que si el resto de la cant de letras % 2 es igual a "0", lo tome como un ingrediente par (ingredientesPares), utilizando "push" para que nos devuelva la longitud del array
        if (ingrediente % 2 == 0) {
            ingredientesPares.push(ingredientes[i]);
        } else {
            //En caso contrario, lo guarda como un ingrediente impar (ingredientesImpares)
            ingredientesImpares.push(ingredientes[i]);
        }
    }

    console.log("Los ingredientes pares son: " + ingredientesPares);
    console.log("Lis ingredientes impares son: " + ingredientesImpares);
}

//Declaro la funcion
Pizza(ingredientes);