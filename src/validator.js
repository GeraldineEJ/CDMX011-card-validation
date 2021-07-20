const validator = {
  
 isValid: (digitsCard) => {
    

    let pares;
    let sumaTotal=0;
    
    //Completar digitos si el número ingresado es menor de <16 digitos
 if (digitsCard.length < 16) {
    digitsCard="0".repeat(16-digitsCard.length)+digitsCard;
 //console.log(digitsCard);
}

// Convierto en Array los dígitos que ingresa el usuario
   
 let arrayDigits= Array.from(digitsCard);
 //console.log(arrayDigits);
 
   

    // Invierto el array

let arrayReverse= arrayDigits.reverse();
//console.log(arrayReverse);

    //Lo convierto en numero
for(let i=0; i<arrayReverse.length; i++) {
    arrayReverse[i]= Number(arrayReverse[i]);
   
}

    
    // Duplica los numeros que están en posición par

for (let i=1; i<arrayReverse.length; i+=2) {
   
    pares=arrayReverse[i]*2;
       // console.log(pares);
    
    

    // Suma los digitos de los números >9

if (pares>9) {
    pares = Math.trunc(pares / 10) + (pares % 10);
    console.log("suma digitos del numero "+pares);
    
 }


    //Suma todos los números
    sumaTotal=sumaTotal+arrayReverse[i-1]+pares;
    console.log("suma total es de "+ sumaTotal);

}



// Validar la tarjeta
if (sumaTotal%10 ==0) {
    console.log("tarjeta valida");
    return true;
}

else {
    console.log("Tarjeta invalida");
    return false; 
} 



} 
 
,maskify : (arrayDigits) =>  {
        if (arrayDigits.length>4) {
        arrayDigits="#".repeat(arrayDigits.length-4) + arrayDigits.slice(-4);
        console.log(arrayDigits);

        }
    return arrayDigits;
}





};

export default validator;
