alert("olá :)")

const painel = document.getElementById("painel");
let texto = " ";

let flag = true;
contador = 0

/*
while(flag){

    if(contador<10){
        console.log("trabalhando...")
        contador++;

        texto = "trabalhando"

        let resultado = document.createTextNode(texto+" ");
        painel.appendChild(resultado);
    }else{
        flag = false;
    }
}
*/


for(let x=0 ;x<=20 ;x+=2){
    let resultado = document.createTextNode(x+" ");

    painel.appendChild(resultado);
}
