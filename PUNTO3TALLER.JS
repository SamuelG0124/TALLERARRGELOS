
let cajaDato1=document.getElementById("dato1")
let cajaDato2=document.getElementById("dato2")

let botonGuardar1=document.getElementById("guardar1")
let botonGuardar2=document.getElementById("guardar2")
let botonMostrarDatos=document.getElementById("mostrar")

let arreglo1 = [];
let arreglo2 = [];


botonGuardar1.addEventListener("click", function(evento){

    let datico1 = cajaDato1.value;  
    arreglo1.push(datico1);  
    console.log(arreglo1);   
    cajaDato1.value = ""; 

   
})

botonGuardar2.addEventListener("click",function(evento1){
    let datico2 = cajaDato2.value;
    arreglo2.push(datico2);  
    console.log(arreglo2);   
    cajaDato2.value = ""; 
})


botonMostrarDatos.addEventListener("click", () => {

    resultado.innerText = `Primer Arreglo: ${arreglo1.join(", ")}\nSegundo Arreglo: ${arreglo2.join(", ")}`;
    
});