 var frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

  function exibirSegundoElemento() {
    alert("Segundo Elemento: " + frutas[1]);
  }

  function exibirUltimoElemento() {
    alert("Último Elemento: " + frutas[frutas.length - 1]);
  }

  function adicionarAbacaxi() {
    frutas.push('abacaxi');
    atualizarLista();
  }

  function adicionarMorango() {
    frutas.unshift('morango');
    atualizarLista();
  }

  function removerPrimeiroElemento() {
    frutas.shift();
    atualizarLista();
  }

  function removerUltimoElemento() {
    frutas.pop();
    atualizarLista();
  }

  function atualizarLista() {
    var lista = document.getElementById("frutasList");
    lista.innerHTML = "";
    frutas.forEach(function(fruta) {
      var item = document.createElement("li");
      item.textContent = fruta;
      lista.appendChild(item);
    });
  }
  
  var indiceLaranja = frutas.indexOf('laranja');
  console.log("Índice da 'laranja':", indiceLaranja);

  var frutasM = frutas.filter(function(fruta) {
    return fruta.charAt(0).toLowerCase() === 'm';
  });
  console.log("Frutas que começam com 'm':", frutasM);
  
  atualizarLista();