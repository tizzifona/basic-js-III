// Números:

// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.

function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(3, 5));

// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.

function subtractNumbers(number1, number2) {
  return number1 - number2;
}
console.log(subtractNumbers(15, 5));

// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.

function multiplyNumbers(number1, number2) {
  return number1 * number2;
}
console.log(multiplyNumbers(6, 4));

// 4. Escribe una función que tome dos números como argumentos y devuelva su división.

function divideNumbers(number1, number2) {
  return number1 / number2;
}
console.log(divideNumbers(20, 5));

// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

function powerNumber(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(powerNumber(3, 3));

//6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.

function getRemainder(number1, number2) {
  return number1 % number2;
}
console.log(getRemainder(17, 5));

//7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.

function squareRoot(number) {
  return Math.sqrt(number);
}
console.log(squareRoot(64));

//8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function absoluteValue(number) {
  return Math.abs(number);
}
console.log(absoluteValue(-12));

//9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function roundNumber(decimalNumber) {
  return Math.round(decimalNumber);
}
console.log(roundNumber(4.7));

//10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.

function getRandomNumber() {
  return Math.random();
}
console.log(getRandomNumber());

//## Letras:

// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

function concatenateStrings(string1, string2) {
  return string1 + string2;
}
console.log(concatenateStrings("Hello, ", "world!"));

// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function getStringLength(text) {
  return text.length;
}
console.log(getStringLength("Hello"));

// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function toUpperCase(text) {
  return text.toUpperCase();
}
console.log(toUpperCase("hello"));

// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

function toLowerCase(text) {
  return text.toLowerCase();
}
console.log(toLowerCase("HELLO"));

// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

function getCharacterAt(text, index) {
  return text.charAt(index);
}
console.log(getCharacterAt("Hello", 2));

// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function reverseString(text) {
  return text.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function countCharacter(text, character) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === character) {
      count++;
    }
  }
  return count;
}
console.log(countCharacter("banana", "a"));

// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

function removeSpaces(text) {
  return text.split(" ").join("");
}
console.log(removeSpaces("hello world"));

// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

function isPalindrome(text) {
  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanText === cleanText.split("").reverse().join("");
}
console.log(isPalindrome("Anina"));
console.log(isPalindrome("hello"));

// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world from homework"));

// ## Arrays:

// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

function sumArray(arr) {
  return arr.reduce(function(sum, num) {
    return sum + num;
  }, 0);
}
console.log(sumArray([1, 2, 3, 4]));

// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function averageArray(arr) {
  return arr.reduce(function(total, num) {
    return total + num;
  }, 0) / arr.length;
}
console.log(averageArray([1, 2, 3, 4])); 

// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

function sortArrayAsc(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
console.log(sortArrayAsc([4, 1, 3, 2]));

// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function greaterThan(arr, num) {
  return arr.filter(function(element) {
    return element > num;
  });
}
console.log(greaterThan([1, 2, 3, 4], 2));

// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function mergeArrays(arr1, arr2) {
return arr1.concat(arr2);
}
console.log(mergeArrays([1,4], [3,8]));

// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

function maxInArray(arr){
  return Math.max.apply(null, arr);
}
console.log(maxInArray([2,6,8,9]));
// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function minInArray(arr){
  return Math.min.apply(null, arr);
}
console.log(minInArray([0,5,3,2]));

// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function countElement(arr, element){
  return arr.filter(function(item){
    return item ===element;
  }).length;
}
console.log(countElement([1,3,4,5,5,6,7,5], 5));
// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function removeDuplicates(arr){
  return Array.from(new Set(arr));
}
console.log(removeDuplicates([1,2,3,1,2,3,3]));

// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

function reverseArr(arr){
  return arr.reverse();
}
console.log(reverseArr([4,3,2,1]));

// ## Objetos literales:

// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

function getName(object){
  return object.name;
}
console.log(getName({name:'Alex'}));

// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function updateAge(object, newAge){
  object.age = newAge;
}
let person1 = {age: 25};
updateAge(person1, 30);
console.log(person1);

// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

function addProperty(obj, propName) {
  obj[propName] = null;
}

let person2 = { name: "Sam" };
addProperty(person2, "address");
console.log(person2);

// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

function deleteProperty(obj, propName) {
  delete obj[propName];
}

let person3 = { name: "Mike", age: 40 };
deleteProperty(person3, "age");
console.log(person3);

// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties({ name: "Mike", age: 40 }));

// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

function hasProperty(obj, propName) {
  return obj.hasOwnProperty(propName);
}

console.log(hasProperty({ name: "Mike" }, "name"));
console.log(hasProperty({ name: "Mike" }, "age")); 

// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

function getValues(obj) {
  return Object.values(obj);
}

console.log(getValues({ name: "Mike", age: 40 }));

// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.

function areObjectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(areObjectsEqual({ name: "Mike", age: 40 }, { name: "Mike", age: 40 })); 
console.log(areObjectsEqual({ name: "Mike", age: 40 }, { name: "Mike", age: 39 }));             

// 9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

function copyObject(obj) {
  return { ...obj };
}

let original = { name: "Mike", age: 40 };
let copy = copyObject(original);
console.log(copy);

// 10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let objA = { name: "Mike", age: 40 };
let objB = { age: 39, address: "Spain" };
let merged = mergeObjects(objA, objB);
console.log(merged);