// array de numeros
let numbers = [2,4,6,8,9];
let animales = ['Abeja','Ballena','Caballo','Delfín']

//mutable 
// agregar al final
animales.push('Elefante');
// agragar al inicio
animales.unshift('Avestruz');
// agregar dentro de dos elementos
animales.splice(2,0, "Canguro")//después de qué elemento/cantidad de elemento a eliminar despues de la posicion

// inmutable
let bebidas=['coca','agua','fanta'];
const itemsConcatenados=bebidas.concat(numbers);//es independiente a los dos arrays y no se le puede reasignar valor
itemsConcatenados.push('agregado')

// eliminar elementos
// ultimo
let b = animales.pop();//guarda el elemento eliminado en b
console.log(b);
// final
let b2 = animales.shift();
console.log(b2);



// imrimir la longitud del array
console.log(numbers.length);

//acceder al elemento de un array undefined si el elemento no existe
console.log(numbers[0]);

//acceder a la última posición
console.log(numbers[numbers.length-1]);

console.log(numbers.at(-2)) //si es un at se pueden ingresar valor negativo del final al inicio

// ver todo el contenido de un array
for (let i=0;i<(numbers.length);i++){
    console.log(numbers[i]);
}
// contenido de inicio a fin en una función

function show (arr){
for (let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
} 
}

show(animales);

//mostrarlo en el dom
function showDom(element,arr){
    document.getElementById(element).innerHTML="";

    for (let i=0;i<arr.length;i++){
        document.getElementById(element).innerHTML+=
        `<div>${arr[i]}<div>`;
    } 
}

showDom('array1',animales)//lo  muestra en el dom
showDom('array2',itemsConcatenados)
