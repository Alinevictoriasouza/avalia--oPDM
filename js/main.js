window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js");
    }
  };
  
  function Calcular() {
    disciplina = document.getElementById("disciplina").value;
    cargaHoraria = document.getElementById("cargaHoraria").value;
    numeroAulas = document.getElementById("numeroAulas").value;
    numeroFaltas = document.getElementById("numeroFaltas").value;
  
    const calculo = Math.floor(Number(cargaHoraria) * 0.25)
  
  
    if (Number(numeroFaltas) > calculo) {
      return document.getElementById('calculo').innerHTML = "Reprovado" 
  
      //resultadoo.innerHTML = "em curso" 
      //FALTAS.innerHTML = calculo.toFixed(1)
    } else {
      const permitidas = calculo - numeroFaltas
      return document.getElementById('calculo').innerHTML = `Em curso, faltas possiveis: ${permitidas}, dias permitidos: ${Math.floor( permitidas /  numeroAulas)}`
    }
  }