window.addEventListener('load', e => {
    "use strict";//restrito a funcionar em navegadores comES6 >
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("../sw.js");
    }
});


function consumo_gasolina(){

const capacidade_tanque = document.getElementById('tanque').value;
const quilometros_rodados = document.getElementById('rodados').value;
const preco_combustivel = document.getElementById('preco').value;
const quilometros_porLitro = document.getElementById('litro').value;
let resultado = document.getElementById('resultado');
let botaoo = document.getElementById('botaoo')

let gasto_dinheiro_porLitro = preco_combustivel / quilometros_porLitro;
let gasto_peloKM = gasto_dinheiro_porLitro * quilometros_rodados;
let gasto_encher_tanque = capacidade_tanque * preco_combustivel;
let litros_gastados_conta = quilometros_rodados/quilometros_porLitro;
let conta = capacidade_tanque - litros_gastados_conta
let tanque_totalRodado = capacidade_tanque * quilometros_porLitro;
let vezes_abastecimento = quilometros_rodados/ tanque_totalRodado;

let conta_final_litrosgastados 
 if( conta == 0 ){
   conta_final_litrosgastados = 'Foi utilizado todo o tanque do veiculo'
 } else if(conta < 0){
    conta_final_litrosgastados = 'Foi utilizado todo o tanque do veiculo'
 }else{
    conta_final_litrosgastados = litros_gastados_conta.toFixed(1) + "L";
 }

let botao = document.createElement("button");  
    botao.innerHTML = "Gerar PDF";  
    botao.setAttribute('onClick', 'gerarPDF()');  

let create_result1 = document.createElement('h3');
let create_result2 = document.createElement('h3');
let create_result3 = document.createElement('h3');
let create_result4 = document.createElement('h3');
let create_result5 = document.createElement('h3');
let create_result6 = document.createElement('h3');
let texto = document.createTextNode("Dinheiro gasto por KM: R$" + gasto_dinheiro_porLitro.toFixed(2) + ";");
let texto2 = document.createTextNode("Dinheiro gasto pelo total de Km rodados: R$" + gasto_peloKM.toFixed(2) + ";");
let texto3 = document.createTextNode("Dinheiro total para encher o tanque: R$" + gasto_encher_tanque.toFixed(2) + ";");
let texto4 = document.createTextNode("Utilizado do tanque na viagem: " + conta_final_litrosgastados);
let texto5 = document.createTextNode("Total de km que seu tanque suporta: " + tanque_totalRodado +"km");
let texto6 = document.createTextNode("Vezes de abastecimento durante a viagem: " + vezes_abastecimento.toFixed(2));


create_result1.appendChild(texto);
create_result2.appendChild(texto2);
create_result3.appendChild(texto3);
create_result4.appendChild(texto4);
create_result5.appendChild(texto5);
create_result6.appendChild(texto6);
resultado.appendChild(create_result1);
resultado.appendChild(create_result2);
resultado.appendChild(create_result3);
resultado.appendChild(create_result4);
resultado.appendChild(create_result5);
resultado.appendChild(create_result6);
botaoo.appendChild(botao);

}


function limpar(){
let capacidade_tanque = document.getElementById('tanque');
let quilometros_rodados = document.getElementById('rodados');
let preco_combustivel = document.getElementById('preco');
let quilometros_porLitro = document.getElementById('litro');
let resultado = document.getElementById('resultado');
let botaoo = document.getElementById('botaoo');

capacidade_tanque.value= '';
quilometros_rodados.value= '';
preco_combustivel.value= '';
quilometros_porLitro.value= '';
resultado.innerHTML='';
botaoo.innerHTML=''

}

function gerarPDF(){
const capacidade_tanque = document.getElementById('tanque').value;
const quilometros_rodados = document.getElementById('rodados').value;
const preco_combustivel = document.getElementById('preco').value;
const quilometros_porLitro = document.getElementById('litro').value;
let resultado = document.getElementById('resultado');


let gasto_dinheiro_porLitro = preco_combustivel / quilometros_porLitro;
let gasto_peloKM = gasto_dinheiro_porLitro * quilometros_rodados;
let gasto_encher_tanque = capacidade_tanque * preco_combustivel;
let litros_gastados_conta = quilometros_rodados/quilometros_porLitro;
let conta = capacidade_tanque - litros_gastados_conta
let tanque_totalRodado = capacidade_tanque * quilometros_porLitro;
let vezes_abastecimento = quilometros_rodados/ tanque_totalRodado;

const div = document.createElement("div");

div.insertAdjacentHTML(
    "afterbegin",
     `
<div class="arquivoPDF">
<h1>Relatorio do Consumo</h1>
<div class='dados'>
<div class='parte1'>
</div>
<div class='parte2'></div>
</div>

<div class='resultados'>
<div class='parte4'></div>
<div class='parte3'></div>
</div>

<div class='horario'>

</div> 
`
  );

  html2pdf(div, {
    margin: 0,
    filename: "FisherCombustion - Consumo (veiculo a combustão).pdf",
    html2canvas: { scale: 2, backgroundColor: "#ff8dd0" },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  });
   
 
}

{/* <h2>Dados sobre o veiculo:</h2>
<p><b>Capacidade do tanque :</b> ${capacidade_tanque}L</p>
<p><b>Quilômestros rodados:</b> ${quilometros_rodados}km</p>
<p><b>Preço atual do combustivel:</b> R$${preco_combustivel}</p>
<p><b>Quantos quilômetros seu veiculo faz com 1 litro de combustivel:</b> ${quilometros_porLitro}km</p>
</div>
<h2>Resultado do Consumo e Gasto:</h2> */}