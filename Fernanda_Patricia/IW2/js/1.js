document.getElementById('calcularBtn').addEventListener('click', function() {
	 const total = parseInt(document.getElementById('totalHA').value);
    const valorHoraAula = parseFloat(document.getElementById('valorHoraAula').value);
   
    
    if (!isNaN(valorHoraAula) && !isNaN(total)) {
        const totalGeral = valorHoraAula * total;
        document.getElementById('totalGeral').textContent = ` ${totalGeral.toFixed(0)}`;
    } else {
        alert('Por favor, preencha os campos .');
    }
});