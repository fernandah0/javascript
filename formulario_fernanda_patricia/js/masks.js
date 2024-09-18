document.addEventListener('DOMContentLoaded', function () {
    var telefone = document.getElementById('telefone');
    var cep = document.getElementById('cep');
    var cpf = document.getElementById('cpf');
    var rg = document.getElementById('rg');

    telefone.addEventListener('input', function () {
        this.value = this.value
            .replace(/\D/g, '')          // Remove caracteres não numéricos
            .replace(/^(\d{2})(\d)/, '($1) $2') // Adiciona parênteses
            .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona hífen
            .replace(/(-\d{4})\d+?$/, '$1'); // Limita ao formato padrão
    });

    cep.addEventListener('input', function () {
        this.value = this.value
            .replace(/\D/g, '')          // Remove caracteres não numéricos
            .replace(/^(\d{5})(\d)/, '$1-$2') // Adiciona hífen
            .replace(/(-\d{3})\d+?$/, '$1'); // Limita ao formato padrão
    });

    cpf.addEventListener('input', function () {
        this.value = this.value
            .replace(/\D/g, '')          // Remove caracteres não numéricos
            .replace(/^(\d{3})(\d)/, '$1.$2') // Adiciona ponto
            .replace(/^(\d{3}\.\d{3})(\d)/, '$1.$2') // Adiciona ponto
            .replace(/^(\d{3}\.\d{3}\.\d{3})(\d)/, '$1-$2') // Adiciona hífen
            .replace(/(-\d{2})\d+?$/, '$1'); // Limita ao formato padrão
    });

    rg.addEventListener('input', function () {
        // Remove todos os caracteres não numéricos
        this.value = this.value
            .replace(/\D/g, '') // Remove caracteres não numéricos
            .replace(/^(\d{2})(\d{2})/, '$1.$2') // Adiciona o primeiro ponto
            .replace(/^(\d{2}\.\d{3})(\d{2})/, '$1.$2') // Adiciona o segundo ponto
            .replace(/^(\d{2}\.\d{3}\.\d{3})(\d{1,2})/, '$1-$2') // Adiciona o hífen
            .slice(0, 12); // Limita o tamanho do valor para 12 caracteres
    });
});
