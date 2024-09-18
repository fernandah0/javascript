document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('userForm');
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Impede o envio padrão do formulário
            var xhr = new XMLHttpRequest();
            xhr.open('POST', form.action, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // Mostrar modal de sucesso
                    var successModal = new bootstrap.Modal(document.getElementById('successModal'));
                    successModal.show();
                    
                    // Redirecionar após o fechamento da modal
                    document.getElementById('successModal').addEventListener('hidden.bs.modal', function () {
                        window.location.href = 'index.html';
                    });
                }
            };
            var formData = new FormData(form);
            xhr.send(formData);
        }
        form.classList.add('was-validated');
    });
});

function showSuccessModal(event) {
   
    const form = document.getElementById('userForm');

    
   
}

