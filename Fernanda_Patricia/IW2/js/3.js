function ordenarNumeros() {
  var numeros = [];
  var numero1 = parseInt(document.getElementById("numero1").value);
  var numero2 = parseInt(document.getElementById("numero2").value);
  var numero3 = parseInt(document.getElementById("numero3").value);

  numeros.push(numero1, numero2, numero3);

  // Ordena os números
  numeros.sort(function(a, b) {
    return a - b;
  });

  alert("Array modificado: " + numeros);
}