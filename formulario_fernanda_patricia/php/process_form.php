<?php
// Conectar ao banco de dados
$servername = "localhost";
$username = "root"; // Substitua pelo seu usuário do MySQL
$password = ""; // Substitua pela sua senha do MySQL
$dbname = "wta"; // Nome do banco de dados

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Coletar dados do formulário e sanitizar
$nome = $conn->real_escape_string($_POST['nome']);
$nascimento = $conn->real_escape_string($_POST['nascimento']);
$email = $conn->real_escape_string($_POST['email']);
$telefone = $conn->real_escape_string($_POST['telefone']);
$cep = $conn->real_escape_string($_POST['cep']);
$endereco = $conn->real_escape_string($_POST['endereco']);
$cpf = $conn->real_escape_string($_POST['cpf']);
$rg = $conn->real_escape_string($_POST['rg']);
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Hash da senha
$assunto = $conn->real_escape_string($_POST['assunto']);
$mensagem = $conn->real_escape_string($_POST['mensagem']);

// Verificar se o e-mail já existe
$sql = "SELECT * FROM usuario WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<script>alert('Erro: Este e-mail já está cadastrado.'); window.location.href = '../index.html';</script>";
} else {
    // Inserir dados na tabela
    $sql = "INSERT INTO usuario (nome, nascimento, email, telefone, cep, endereco, cpf, rg, senha, assunto, mensagem)
    VALUES ('$nome', '$nascimento', '$email', '$telefone', '$cep', '$endereco', '$cpf', '$rg', '$senha', '$assunto', '$mensagem')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>
                alert('Cadastro realizado com sucesso!');
                var myModal = new bootstrap.Modal(document.getElementById('successModal'), {});
                myModal.show();
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 3000); // Redireciona após 3 segundos
              </script>";
    } else {
        echo "<script>alert('Erro ao cadastrar: " . $conn->error . "');</script>";
    }
}

// Fechar conexão
$conn->close();
?>
