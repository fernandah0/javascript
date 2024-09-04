CREATE DATABASE DB_2IPI

USE DB_2IPI;

 CREATE TABLE IF NOT EXISTS TB_CEP(

    ID_CEP INT PRIMARY KEY AUTO_INCREMENT,
    CEP VARCHAR(10),
    RUA VARCHAR (100),
    NUMERO VARCHAR(4),
    COMP VARCHAR(60),
    BAIRRO VARCHAR(100),
    CIDADE VARCHAR(100),
    UF CHAR(2)
 );
