<?php
    include('banco.php');
    //variaveis  vinda da url
    $cep = $_GET['cep'];
    $rua = $_GET['endereco'];
    $numero = $_GET['numero'];
    $complemento = $_GET['complemento'];
    $cidade = $_GET['cidade'];
    $bairro = $_GET['bairro'];
    $uf = $_GET['uf'];

    // fazer uma string sql
    $sql="INSERT INTO TB_CEP(CEP, RUA, NUMERO, COMP, BAIRRO, CIDADE, UF) 
    VALUES('$cep','$rua','$numero','$complemento','$bairro','$cidade','$uf')";
    
    // executa sql
    if(mysqli_query($conn, $sql)){
        echo "Vocês são os cascas de balinhas!";
    }else{
        echo "Você é amostradinho >:(";
    }
    mysqli_close($conn);
?>
