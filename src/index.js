import validator from './validator.js';

console.log(validator);

// Lo que hace el botón validar
document.getElementById('btnValidar').addEventListener('click',mostrar);



// Función para mostrar los datos ingresados 

function mostrar() {
    
const digitsCard = document.getElementById('numTarjeta').value;
const valid =validator.isValid(digitsCard)
const ocultar =validator.maskify(digitsCard)
document.getElementById("hiden").innerHTML = ocultar;
const mostrarDigitos= digitsCard;
document.getElementById("mostrarM").innerHTML = mostrarDigitos;


if(digitsCard==""){
    alert("Ingrese un número de tarjeta")
    }
else if (valid===true){

document.getElementById("div1").style.display = "none";
document.getElementById("message").innerHTML = 'Tu tarjeta es válida';
document.getElementById("btnRegresar").style.display = "block";
document.getElementById("hiden").style.display = "block";
document.getElementById("mostrarM").style.display = "none";
    }

else {
    document.getElementById("div1").style.display = "none";
    document.getElementById("message").innerHTML = 'Tu tarjeta es inválida';
    document.getElementById("btnRegresar").style.display = "block";
    document.getElementById("hiden").style.display = "none";
    document.getElementById("mostrarM").style.display = "block";
    }   

}

// Lo que hace el botón regresar
document.getElementById("btnRegresar").addEventListener('click', regresar );

function regresar() {

    document.getElementById("div1").style.display = "block";
    document.getElementById("numTarjeta").value = "";
    document.getElementById("btnRegresar").style.display = "none";
    document.getElementById("message").style.display = "none";
    document.getElementById("hiden").style.display = "none";
    document.getElementById("mostrarM").style.display = "none";   
    
}