const senha=document.getElementById("senha");

const gerar=document.getElementById("gerar");

const copiar=document.getElementById("copiar");

const tamanho=document.getElementById("tamanho");

const valor=document.getElementById("valor");

const nivel=document.getElementById("nivel");

const texto=document.getElementById("textoForca");

valor.innerHTML=tamanho.value;

tamanho.oninput=()=>{

valor.innerHTML=tamanho.value;

}

gerar.onclick=()=>{

const MAIUS="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const MINUS="abcdefghijklmnopqrstuvwxyz";

const NUM="0123456789";

const SIMB="!@#$%&*()-_=+?/";

let chars="";

if(maiusculas.checked) chars+=MAIUS;

if(minusculas.checked) chars+=MINUS;

if(numeros.checked) chars+=NUM;

if(simbolos.checked) chars+=SIMB;

if(chars===""){

alert("Selecione pelo menos uma opção.");

return;

}

let pass="";

for(let i=0;i<tamanho.value;i++){

pass+=chars.charAt(Math.floor(Math.random()*chars.length));

}

senha.value=pass;

verificar();

}

copiar.onclick=()=>{

navigator.clipboard.writeText(senha.value);

copiar.innerHTML="✔";

setTimeout(()=>{

copiar.innerHTML="📋";

},1200);

}

function verificar(){

let pontos=0;

if(maiusculas.checked) pontos++;

if(minusculas.checked) pontos++;

if(numeros.checked) pontos++;

if(simbolos.checked) pontos++;

if(tamanho.value>=16) pontos++;

if(tamanho.value>=24) pontos++;

if(pontos<=2){

nivel.style.width="30%";

nivel.style.background="#ef4444";

texto.innerHTML="Força: Fraca";

}

else if(pontos<=4){

nivel.style.width="65%";

nivel.style.background="#f59e0b";

texto.innerHTML="Força: Média";

}

else{

nivel.style.width="100%";

nivel.style.background="#22c55e";

texto.innerHTML="Força: Forte";

}

}