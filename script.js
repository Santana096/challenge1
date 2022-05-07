const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area")

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
     document.getElementById("nino").style.display = "none";
     document.getElementById("text1").style.display = "none";
     document.getElementById("copy").style.display = "show";
     document.getElementById("copy").style.display = "inherit"

}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;

}

function btndesencrptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
     document.getElementById("nino").style.display = "none";
     document.getElementById("text1").style.display = "none";
     document.getElementById("text2").innerHTML = textoencriptado;
     document.getElementById("copy").style.display = "show";
     document.getElementById("copy").style.display = "inherit"
}
function desencriptar(StringParaEncriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

function copiar(){
 var contenido = document.querySelector("#textE");
 contenido.select();
 document.execCommand("copy");
 alert("Texto Copiado");

}