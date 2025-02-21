//TECNICA DE DOS PUNTEROS
//Suma de dos valores deben de dar de resultado el valor objetivo
// La lista debe ser ordenada


/*Paso 1: Crear dos punteros. Uno al principio de la lista y otro al final
Un puntero puede ser simplemente una variable que tome como valor un índice de la lista.

Paso 2: Verificar si la suma de los dos valores es igual a nuestro objetivo

Si la suma de los dos valores es igual al objetivo, entonces encontramos el par y sólo deberíamos devolver sus índices.
Si la suma es mayor, entonces necesitamos una suma menor por lo que vamos a disminuir el puntero 2.
Si la suma es menor, entonces necesitamos una suma mayor por lo que vamos a aumentar el puntero 1.
Recuerda que la única razón por la que si aumentamos o disminuimos los punteros 
nuestra suma aumenta o disminuye es porque la lista está ordenada.
*/

// function DosPunteros(arreglo, valorObjetivo)
let dosPunteros = (arreglo, valorObjetivo) =>
{
    // arreglo.sort((a,b) => a - b);

    let punteroIzq = 0;
    let punteroDer = arreglo.length - 1;

    while(punteroIzq < punteroDer)
    {
        let sumaActual = arreglo[punteroIzq] + arreglo[punteroDer];
        
        if(sumaActual === valorObjetivo) 
            return true;
        //con return se genera un break y dejara de buscar
        else{
            if(sumaActual < valorObjetivo)  punteroIzq++;
            else    punteroDer--;
        }
    }
    return false;//si no encuentras el par
}

let arreglo = [ 2, 5, 8, 10, 12, 13, 16, 19, 20, 21, 22, 25, 40, 42, 48 ];
let valorObjetivo = 100;

console.log(`Impresion de arreglo: ${arreglo}`);
console.log(`longitud de arreglo: ${arreglo.length}`);

// console.log(`Puntero izquierdo: ${punteroIzq}`);
// console.log(`Puntero derecho: ${punteroDer}`);
console.log(`valor objetivo: ${valorObjetivo}`);

if(dosPunteros(arreglo, valorObjetivo)){
    console.log("true");
} else console.log("false");







