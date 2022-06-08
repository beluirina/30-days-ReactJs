mixedDataTypes = [
    true,//booleano
    250,
    'nayla',

    //objetos
    { country: 'Finland', city: 'Helsinki' },

    // objeto con array
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
]

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


// Get the first item, the middle item and the last item of the array -- webTechs[0]
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5 -- .length // 
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array -- console.log(itCompanies.length)
// Print the first company, middle and last company

itCompanies[0]
itCompanies[3]
itCompanies[6] //.length -1

//Print out each company 
//Change each company name to uppercase one by one and print them out

itCompanies[0].toUpperCase()
itCompanies[3].toUpperCase()
itCompanies[6].toUpperCase()

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(` ${itCompanies[0]}, ${itCompanies[1]}, ... are big IT companies`)

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let company = 'Facebook'

let selector = (company) => {
    if (itCompanies.includes(company)) {
        return company;
    } else {
        return ` ${company} is not found`
    }
}

console.log(selector(company))


https://codepen.io/

//Filter out companies which have more than one 'o' without the filter method

let companias = (arr) => {
    arr.forEach(company => { return company })

}



// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
function caracterMasComun(palabra) {
    let contador = 0;
    let palabraArr = palabra.split("");
    for (let i = 0; i < palabraArr.length; i++) {
        if (palabraArr[i] == 'o') {
            contador++;
        }
    }
    if (contador >= 2) {
        return palabra;
    } else {
        return "";
    }
}

let arrayParaMuchosO = [];

for (let i = 0; i < itCompanies.length; i++) {

    let EmpresaConO = caracterMasComun(itCompanies[i]);

    if (EmpresaConO == '') {

    } else {
        arrayParaMuchosO.push(EmpresaConO);
    }
}

console.log(arrayParaMuchosO);



//Sort the array using sort() method

itCompanies.sort()

//Reverse the array using reverse() method

itCompanies.reverse()

//Slice out the first 3 companies from the array

console.log(itCompanies.slice(0, 3)); //====> ["Oracle", "Microsoft", "IBM" ]


//Slice out the middle IT company or companies from the array

itCompanies.slice(itCompanies.slice(2, 3))


//Remove the first IT company from the array

console.log(itCompanies.shift())

//Remove the middle IT company or companies from the array

// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//================FALTA CORREGIR=========
let fulter = itCompanies.filter((i) => {
    return //
})
console.log(fulter)

//Remove the last IT company from the array

itCompanies.pop()

//Remove all IT companies

console.log(itCompanies.slice())



