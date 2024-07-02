let data = new Date();
let diaSemanaInt = data.getDay();
let diaSemana;
switch (diaSemanaInt){
    case 0: diaSemana = "Domingo"; break;
    case 1: diaSemana = "Segunda-Feira"; break;
    case 2: diaSemana = "Terça-Feira"; break;
    case 3: diaSemana = "Quarta-Feira"; break;
    case 4: diaSemana = "Quinta-Feira"; break;
    case 5: diaSemana = "Sexta-Feira"; break;
    case 6: diaSemana = "Sábado"; break;
    default: diaSemana = "ERRO!!"; break; 
}
let diaMes = data.getDate();
let mesInt = data.getMonth();
let mes;
switch (mesInt){
    case 0: mes = "janeiro"; break;
    case 1: mes = "fevereiro"; break;
    case 2: mes = "março"; break;
    case 3: mes = "abril"; break;
    case 4: mes = "maio"; break;
    case 5: mes = "junho"; break;
    case 6: mes = "julho"; break;
    case 7: mes = "agosto"; break;
    case 8: mes = "setembro"; break;
    case 9: mes = "outubro"; break;
    case 10: mes = "novembro"; break;
    case 11: mes = "dezembro"; break;
    default: mes = "ERRO!!"; break;
}
let ano = data.getFullYear();
let horas = data.getHours();
let minutos = data.getMinutes();
document.getElementById("resultado").innerText = 
`${diaSemana}, ${diaMes} de ${mes} de ${ano}
\n ${horas}:${minutos}`;
