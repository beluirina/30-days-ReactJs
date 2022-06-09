//Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
import countries from "./country.js";
import webTechs from "./web_tech.js"
console.log(countries);
console.log(webTechs);


//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python';

let separarPorEspacios=(str)=>{
   let resultado= str.split(" "); // lo dividimos por espacios
   return resultado //devolvemos el valor obtenido
}
console.log(separarPorEspacios(text));
console.log(separarPorEspacios(text).length) //contamos cuantas palabras




//==================3==============================


// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//     add 'Meat' in the beginning of your shopping cart if it has not been already added
//     add Sugar at the end of you shopping cart if it has not been already added
//     remove 'Honey' if you are allergic to honey
//     modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat") // agregar al principio

shoppingCart.push("Sugar") //pushear

shoppingCart[2] = 'Green Tea'

console.log(shoppingCart)

let product

let alergic = (boolean,producto,lista)=>{
    product=producto.toLowerCase()
    if(boolean=true){
        for(let i=0;i<lista.length;i++){
            if(lista[i].toLocaleLowerCase()===product){
                let splicedArray = lista.splice(i /*desde este elemento*/ , 1 /*cuantos elementos despues queres sacar*/)
                console.log(splicedArray);
                console.log(lista);
            }
        }
    }
}
alergic(true,"meat", shoppingCart);


let producto

let cambiarProducto=(prodACambiar,cambio,arr)=>{
    producto=prodACambiar.toLowerCase();
    arr.forEach((element,i)=> {
      if(arr[i].toLowerCase()===producto){
          let spliced=arr.splice(i,1,cambio);
          console.log(arr);
          console.log(spliced)
        }
    });
}
cambiarProducto("tea","grenTea",shoppingCart);


//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


let existePais=(pais,arr)=>{
    arr.forEach((element)=>{
        if(element===pais.toLowerCase()){
            console.log(element.toUpercase());
        }
    })

}

existePais('ethiopia', countries);