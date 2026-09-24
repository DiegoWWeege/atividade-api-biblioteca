const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'root',
    database : 'biblioteca_api_diego'
});

connection.connect((erro) =>{
    if(erro){
        console.log('Erro ao conectar ao banco de dados: ', erro);
        return;
    }
    console.log('Banco de dados conectado com sucesso!');
})

module.exports = connection;

