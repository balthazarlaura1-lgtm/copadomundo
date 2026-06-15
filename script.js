const grupos = {

A:[
"México",
"Coreia do Sul",
"Tchéquia",
"África do Sul"
],

B:[
"Canadá",
"Bósnia e Herzegovina",
"Suíça",
"Catar"
],

C:[
"Brasil",
"Marrocos",
"Haiti",
"Escócia"
],

D:[
"Estados Unidos",
"Paraguai",
"Austrália",
"Turquia"
],

E:[
"Alemanha",
"Curaçao",
"Costa do Marfim",
"Equador"
],

F:[
"Japão",
"Holanda",
"Suécia",
"Tunísia"
]

};

const todasSelecoes = Object.values(grupos).flat();

const partidas = [

{
data:"11/06/2026",
t1:"México",
t2:"África do Sul",
g1:2,
g2:0
},

{
data:"11/06/2026",
t1:"Coreia do Sul",
t2:"Tchéquia",
g1:2,
g2:1
},

{
data:"12/06/2026",
t1:"Estados Unidos",
t2:"Paraguai",
g1:4,
g2:1
},

{
data:"12/06/2026",
t1:"Canadá",
t2:"Bósnia e Herzegovina",
g1:1,
g2:1
},

{
data:"13/06/2026",
t1:"Suíça",
t2:"Catar",
g1:1,
g2:1
},

{
data:"13/06/2026",
t1:"Haiti",
t2:"Escócia",
g1:0,
g2:1
},

{
data:"13/06/2026",
t1:"Brasil",
t2:"Marrocos",
g1:1,
g2:1
},

{
data:"14/06/2026",
t1:"Austrália",
t2:"Turquia",
g1:2,
g2:0
},

{
data:"14/06/2026",
t1:"Alemanha",
t2:"Curaçao",
g1:7,
g2:1
},

{
data:"14/06/2026",
t1:"Japão",
t2:"Holanda",
g1:2,
g2:2
}

];

const select1 =
document.getElementById("time1");

const select2 =
document.getElementById("time2");

function carregarSelecoes(){

todasSelecoes.forEach(time=>{

const op1 =
document.createElement("option");

op1.value = time;
op1.textContent = time;

select1.appendChild(op1);

const op2 =
document.createElement("option");

op2.value = time;
op2.textContent = time;

select2.appendChild(op2);

});

}

carregarSelecoes();
function renderizarPartidas(){

const tbody =
document.querySelector(
"#tabelaPartidas tbody"
);

tbody.innerHTML = "";

partidas.forEach((jogo,index)=>{

const linha =
document.createElement("tr");

linha.innerHTML = `

<td>${jogo.data}</td>

<td>${jogo.t1} x ${jogo.t2}</td>

<td>${jogo.g1} x ${jogo.g2}</td>

<td>

<button
class="btnExcluir"
onclick="excluirPartida(${index})">

Excluir

</button>

</td>

`;

tbody.appendChild(linha);

});

}

function excluirPartida(index){

partidas.splice(index,1);

renderizarPartidas();

atualizarClassificacoes();

}

document
.getElementById("btnAdicionar")
.addEventListener(
"click",
()=>{

const data =
document.getElementById("data").value;

const t1 =
document.getElementById("time1").value;

const t2 =
document.getElementById("time2").value;

const g1 =
parseInt(
document.getElementById("gols1").value
);

const g2 =
parseInt(
document.getElementById("gols2").value
);

if(t1 === t2){

alert(
"Selecione times diferentes."
);

return;

}

partidas.push({

data:data,
t1:t1,
t2:t2,
g1:g1,
g2:g2

});

renderizarPartidas();

atualizarClassificacoes();

}
);
function criarTabelaBase(){

const tabela = {};

todasSelecoes.forEach(time=>{

tabela[time] = {

nome:time,
pts:0,
j:0,
v:0,
e:0,
d:0,
gp:0,
gc:0,
sg:0

};

});

return tabela;

}

function atualizarClassificacoes(){

const tabela = criarTabelaBase();

partidas.forEach(jogo=>{

const a = tabela[jogo.t1];
const b = tabela[jogo.t2];

a.j++;
b.j++;

a.gp += jogo.g1;
a.gc += jogo.g2;

b.gp += jogo.g2;
b.gc += jogo.g1;

a.sg = a.gp - a.gc;
b.sg = b.gp - b.gc;

if(jogo.g1 > jogo.g2){

a.v++;
a.pts += 3;

b.d++;

}

else if(jogo.g2 > jogo.g1){

b.v++;
b.pts += 3;

a.d++;

}

else{

a.e++;
b.e++;

a.pts += 1;
b.pts += 1;

}

});

renderizarGeral(tabela);

renderizarGrupo("A",tabela);
renderizarGrupo("B",tabela);
renderizarGrupo("C",tabela);
renderizarGrupo("D",tabela);
renderizarGrupo("E",tabela);
renderizarGrupo("F",tabela);

}

function ordenar(lista){

return lista.sort((a,b)=>{

if(b.pts !== a.pts)
return b.pts - a.pts;

if(b.sg !== a.sg)
return b.sg - a.sg;

return b.gp - a.gp;

});

}

function renderizarGeral(tabela){

const corpo =
document.querySelector(
"#classificacaoGeral tbody"
);

corpo.innerHTML = "";

const ranking =
ordenar(
Object.values(tabela)
);

ranking.forEach((time,index)=>{

let classe = "";

if(index === 0)
classe = "lider";

if(index === 1)
classe = "segundo";

if(index === 2)
classe = "terceiro";

corpo.innerHTML += `

<tr class="${classe}">

<td>${index+1}</td>

<td>${time.nome}</td>

<td>${time.pts}</td>

<td>${time.j}</td>

<td>${time.v}</td>

<td>${time.e}</td>

<td>${time.d}</td>

<td>${time.gp}</td>

<td>${time.gc}</td>

<td>${time.sg}</td>

</tr>

`;

});

}

function renderizarGrupo(grupo,tabela){

const corpo =
document.getElementById(
"grupo"+grupo
);

corpo.innerHTML = "";

const ranking = ordenar(

grupos[grupo].map(

time => tabela[time]

)

);

ranking.forEach((time,index)=>{

corpo.innerHTML += `

<tr>

<td>${index+1}</td>

<td>${time.nome}</td>

<td>${time.pts}</td>

<td>${time.j}</td>

<td>${time.v}</td>

<td>${time.e}</td>

<td>${time.d}</td>

<td>${time.sg}</td>

</tr>

`;

});

}

renderizarPartidas();
atualizarClassificacoes();
