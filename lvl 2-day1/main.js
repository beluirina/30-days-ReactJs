import countries from "./country.js";
import webTechs from "./web_tech.js"
console.log(countries);
console.log(webTechs);



let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python';

let separarPorEspacios=(str)=>{

   let resultado= str.split(" ");
   return resultado
}


  
console.log(separarPorEspacios(text));
console.log(separarPorEspacios(text).length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat")

shoppingCart.push("Sugar")

console.log(shoppingCart)



let alergic=(boolean,producto,lista)=>{

    product=producto.toLowerCase()
    if(boolean=true){
        for(let i=0;i<lista.length;i++){
            if(lista[i].toLocaleLowerCase()===product){
                let splicedArray =lista.splice(i,1)
                console.log(splicedArray);
                console.log(lista);


            }
        }
            
        }
    }


  
alergic(true,"meat", shoppingCart);


let cambiarProducto=(prodACambiar,cambio,arr)=>{
    let producto=prodACambiar.toLowerCase();

    arr.forEach((element,i)=> {
      if(arr[i].toLowerCase()===producto){
          let spliced=arr.splice(i,1,cambio);
          console.log(arr);
          console.log(spliced)

      }
        
    });



}
cambiarProducto("tea","grenTea",shoppingCart);


let existePais=(pais,arr)=>{
    arr.forEach((element)=>{
        if(element===pais.toLowerCase()){
            console.log(element.toUpercase());
        }
    })

}

existePais(ethiopia,countries);