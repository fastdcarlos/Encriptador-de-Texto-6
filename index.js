var btnCopy = document.querySelector(".btnCopy");
var bloqueSalida = document.querySelector(".salida-result");
var bloqueImg = document.querySelector (".mono");



btnCopy.onclick = copiarTexto;



function encriptar(){
    let texto = document.getElementById("texto").value;
   
 
    if(texto != ""){
        if (validar(texto)){
        let textoCifrado = texto.replace (/e/gi, "enter")
                                .replace(/i/gi, "imes")
                                .replace(/a/gi, "ai")
                                .replace(/o/gi, "ober")
                                .replace(/u/gi, "ufat");
       // document.getElementById("texto").value = textoCifrado;
        document.getElementById("titulo-mensaje").textContent = "Texto encriptado con éxito:";
        document.getElementById("mensaje").value = textoCifrado;
        
        mostrarBloque();
        limpiar();
         } else{
            swal('Error','No Se Pueden Usar Mayúsculas o Caracteres Especiales','error' );
         }
    }else{
        swal('Atencion','El Campo De Texto No Puede Estar Vacío','warning');
     }
    
}


function desencriptar(){
    let texto = document.getElementById("texto").value;
   
    if(texto != ""){
        if (validar(texto)){
        let textoCifrado = texto.replace (/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
         document.getElementById("mensaje").value = textoCifrado;
         document.getElementById("titulo-mensaje").textContent = "Texto desencriptado con éxito:";
         limpiar();
         mostrarBloque();
        }else{
            // swal('No Se Pueden Usar Mayúsculas o Caracteres Especiales', "warning");
            swal('Error','No Se Pueden Usar Mayúsculas o Caracteres Especiales','error' );
         }
    }else{
        swal('Atencion','El Campo De Texto No Puede Estar Vacío','warning');
     }
    
}


function limpiar(){

    document.getElementById("texto").value = "";
    
    
}

function limpiarCopy(){
    document.getElementById("mensaje").value = "";
}

function copiarTexto(){
    var content = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(content);
    limpiarCopy();
    ocultarBloque();
}

function validText() {
    return text ? !/[^a-z\sñ]/.test(text) : true;
}



function ocultarBloque(){
    bloqueSalida.classList.add("ocultar");
    bloqueImg.classList.remove("ocultar")
 }

 function mostrarBloque(){
    bloqueSalida.classList.remove("ocultar");
    bloqueImg.classList.add("ocultar");
  }

  function validar(text) {

    return text ? !/[^a-z\sñ]/.test(text) : true;
  }