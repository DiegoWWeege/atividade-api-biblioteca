const express = require('express');
const cors = require('cors');
const connection = require('./db.js');

const server = express();

server.use(cors());
server.use(express.json());


//FUNCIONA
server.get('/livros', (req, res) =>{

    const sql = 'SELECT * FROM livro';

    connection.query(sql, (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro: erro.message})
        }

        return res.json(resultados);
    })
});

//FUNCIONA
server.get('/livros/busca/:id', (req, res) =>{
    const { id } = req.params;

    const sql = `SELECT * FROM livro WHERE id_livro = ${id}`

    connection.query(sql, (erro, resultado) =>{
        if(erro){
            return res.status(500).json({erro: erro.message})
        }

        return res.json(resultado)
    })
});

//FUNCIONA
server.get('/livros/buscaTitulo/:titulo', (req, res) =>{
    
    const sql = `SELECT * FROM livro WHERE titulo LIKE ?`;

    const termoBusca = '%' + req.params.titulo + '%';

    connection.query(sql,[termoBusca], (erro, resultado) =>{
        if(erro){
            return res.status(500).json({erro : erro.message}) 
        }

        res.json(resultado);

    })
});

//Funciona
server.get('/livros/ordenados', (req, res) =>{

    const sql = `SELECT * FROM livro ORDER BY titulo`;

    connection.query(sql, (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro : erro.message});
        }

        return res.json(resultados);
    })
});

//FUNCIONA
server.post('/livros', (req, res) =>{
    const {
        titulo, autor, isbn , ano_publicacao, categoria, qtd
    } = req.body

    if(titulo == null, autor == null,isbn == null,
        ano_publicacao == null,categoria == null,qtd == null){
            return res.status(500).json({erro: 'Todos os campos devem ser preenchidos!'})
    }

    const sql = `INSERT INTO livro (titulo, autor, isbn, ano_publicacao, categoria, qtd)
    VALUES (?, ? ,?, ?, ? ,?);`

    connection.query(sql, [titulo, autor, isbn, ano_publicacao, categoria, qtd], (erro, resultado)=>{
        if(erro){
            return res.status(500).json({erro : erro.message});
        }

        res.json({
            mensagem : 'Produto cadastrado com sucesso!',
            id: resultado.insertId
        })
    })
})

//FUNCIONA
server.put('/livros/:id', (req, res) =>{
    const {
        titulo, autor, isbn , ano_publicacao, categoria, qtd
    } = req.body

    const {id} = req.params;

    if(titulo == null, autor == null,isbn == null,
        ano_publicacao == null,categoria == null,qtd == null){
            return res.status(500).json({erro: 'Todos os campos devem ser preenchidos!'})
    }

    const sql = `UPDATE livro SET titulo = ?, autor = ?, 
    isbn = ? , ano_publicacao = ?, categoria = ?, qtd = ?
    WHERE id_livro = ${id}`

    connection.query(sql, [titulo, autor, isbn, ano_publicacao, categoria, qtd], (erro, resultado)=>{
        if(erro){
            return res.status(500).json({erro : erro.message});
        }

        res.json({
            mensagem : 'Produto atualizado com sucesso!'
        })
    })
})

server.delete('/livros/:id', (req, res) =>{

    const { id } = req.params;

    const sql = `DELETE FROM livro WHERE id_livro = ${id}`;

    connection.query(sql, (erro, resultado) =>{
        if(erro){
            return res.status(500).json({erro : erro.message})
        }

        res.json({
            mensagem : 'Produto deletado com sucesso!'
        })
    })
})

//FUNCIONA
server.get('/usuarios', (req, res) =>{
    
    const sql = `SELECT * FROM usuario`;

    connection.query(sql, (erro, resultado) =>{
        if(erro){
            return res.status(500).json({erro : erro.message}) 
        }

        res.json(resultado);

    })
});

//FUNCIONA
server.get('/usuarios/:id', (req, res) =>{

    const{id} = req.params;

    const sql = `SELECT * FROM usuario WHERE id_usuario = ${id}`;

    connection.query(sql, (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro : erro.message});
        }

        return res.json(resultados);
    })
});

//FUNCIONA
server.post('/usuarios', (req, res) =>{
    const {
        nome, cpf, email , telefone
    } = req.body

    if(nome == null, cpf == null,email == null,
        telefone == null){
            return res.status(500).json({erro: 'Todos os campos devem ser preenchidos!'})
    }

    const sql = `INSERT INTO usuario (nome, cpf, email, telefone)
    VALUES (?, ? ,?, ?);`

    connection.query(sql, [nome, cpf, email, telefone], (erro, resultado)=>{
        if(erro){
            return res.status(500).json({erro : erro.message});
        }

        res.json({
            mensagem : 'Usuário cadastrado com sucesso!',
            id: resultado.insertId
        })
    })
})

//FUNCIONA
server.put('/usuarios/:id', (req, res) =>{
    const {
        nome, cpf, email , telefone
    } = req.body


    const { id } = req.params;

    if(nome == null, cpf == null,email == null,
        telefone == null){
            return res.status(500).json({erro: 'Todos os campos devem ser preenchidos!'})
    }

    const sql = `UPDATE usuario SET nome = ?, cpf = ?, email = ?, telefone = ? 
    WHERE id_usuario = ${id};`

    connection.query(sql, [nome, cpf, email, telefone], (erro, resultado)=>{
        if(erro){
            return res.status(500).json({erro : erro.message});
        }

        res.json({
            mensagem : 'Usuário Atualizado com sucesso!'
        })
    })
})


//FUNCIONA
server.delete('/usuarios/:id', (req, res) =>{

    const { id } = req.params;

    const sql = `DELETE FROM usuario WHERE id_usuario = ${id}`;

    connection.query(sql, (erro, resultado) =>{
        if(erro){
            return res.status(500).json({erro : erro.message})
        }

        res.json({
            mensagem : 'Usuário deletado com sucesso!'
        })
    })
})


//FUNCIONA
server.get('/emprestimos', (req, res) =>{
    
    const sql = `SELECT * FROM emprestimo`;

    connection.query(sql, (erro, resultado) =>{
        if(erro){
            return res.status(500).json({erro : erro.message}) 
        }

        res.json(resultado);

    })
});

//FUNCIONA
server.get('/emprestimos/:id', (req, res) =>{

    const{id} = req.params;

    const sql = `SELECT * FROM emprestimo WHERE id_emprestimo = ${id}`;

    connection.query(sql, (erro, resultados) =>{
        if(erro){
            return res.status(500).json({erro : erro.message});
        }

        return res.json(resultados);
    })
});

//FUNCIONA
server.post('/emprestimos', (req, res) =>{
    const {
        id_livro_emprestimo, id_usuario_emprestimo,
         data_emprestimo , data_prevista_devolucao_emprestimo,
         data_devolucao_emprestimo, livro_id, usuario_id
    } = req.body

    if(id_livro_emprestimo == null, id_usuario_emprestimo == null,
        data_emprestimo == null, data_prevista_devolucao_emprestimo == null,
    data_devolucao_emprestimo == null, livro_id == null, usuario_id == null){
            return res.status(500).json({erro: 'Todos os campos devem ser preenchidos!'})
    }

    const sql = `INSERT INTO emprestimo(id_livro_emprestimo, id_usuario_emprestimo, 
                data_emprestimo, data_prevista_devolucao_emprestimo, data_devolucao_emprestimo,
                livro_id, usuario_id) 
                VALUES (?,?,?,?,?,?,?);`

    connection.query(sql, [id_livro_emprestimo, id_usuario_emprestimo, 
        data_emprestimo, data_prevista_devolucao_emprestimo, data_devolucao_emprestimo,
        livro_id, usuario_id], (erro, resultado)=>{
        if(erro){
            return res.status(500).json({erro : erro.message});
        }

        res.json({
            mensagem : 'Empréstimo cadastrado com sucesso!',
            id: resultado.insertId
        })
    })
})

server.put('/emprestimos/:id', (req, res) =>{
    const {
        id_livro_emprestimo, id_usuario_emprestimo,
         data_emprestimo , data_prevista_devolucao_emprestimo,
         data_devolucao_emprestimo, livro_id, usuario_id
    } = req.body

    if(id_livro_emprestimo == null, id_usuario_emprestimo == null,
        data_emprestimo == null, data_prevista_devolucao_emprestimo == null,
    data_devolucao_emprestimo == null, livro_id == null, usuario_id == null){
            return res.status(500).json({erro: 'Todos os campos devem ser preenchidos!'})
    }

    const sql = `UPDATE emprestimo SET id_livro_emprestimo = ?, id_usuario_emprestimo = ?, 
                data_emprestimo = ?, data_prevista_devolucao_emprestimo = ?, data_devolucao_emprestimo = ?,
                livro_id = ?, usuario_id = ?`;

    connection.query(sql, [id_livro_emprestimo, id_usuario_emprestimo, 
        data_emprestimo, data_prevista_devolucao_emprestimo, data_devolucao_emprestimo,
        livro_id, usuario_id], (erro, resultado)=>{
        if(erro){
            return res.status(500).json({erro : erro.message});
        }

        res.json({
            mensagem : 'Empréstimo atualizado com sucesso!',
        })
    })
})

const PORT = 3025;

server.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

