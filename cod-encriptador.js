const IngresoTexto= document.getElementById ("IngresoTexto");
const botonEncriptar= document.getElementById ("botonEncriptar");
const botonDesencriptar= document.getElementById("botonDesencriptar");
const botonCopiar= document.getElementById("botonCopiar");
const mensajeFinal= document.getElementById("mensajeFinal");
const muñecoLupa= document.getElementById("muñecoLupa");
const derechaInfo= document.getElementById("derechaInfo");
const derecha= document.getElementById("derecha");

/*"e", "enter"
  "i", "imes"
  "a", "ai"
  "o", "ober"
  "u", "ufat"*/
let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]
const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muñecoLupa.classList.add="oculto";
    derechaInfo.style.display="none";
    botonCopiar.style.display="block"; 
    derecha.classList.add("ajustar");
    IngresoTexto.value=""
    mensajeFinal.classList.add("ajustar");
}
botonEncriptar.addEventListener("click",()=> {
    const texto = IngresoTexto.value.toLowerCase()
    if (texto != "") {
        function encriptar(newText) {
            for(let i = 0; i< remplazar.length; i++){
                if (newText.includes(remplazar[i][0])) {
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])
                };
            };
            return newText
        };
    };
    //const textoEncriptado = encriptar(texto);

    remplace(encriptar(texto));

})
botonDesencriptar.addEventListener("click", ()=> {
    const texto= IngresoTexto.value.toLowerCase();
    if (texto != "") {
        function desencriptar(newText) {
            for(let i=0; i< remplazar.length; i++){
                if (newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText
        }
        
    }
    remplace(desencriptar(texto))
})
botonCopiar.addEventListener("click",() => {
    let texto= mensajeFinal;
    //navigator.clipboard.writeText(texto.value)
    texto.select();
    document.execCommand('copy');

    mensajeFinal.innerHTML=""

    muñecoLupa.classList.remove="oculto"

    derechaInfo.style.display="block";
    botonCopiar.style.display="none"; 
    
    derecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");

    IngresoTexto.focus();
})

