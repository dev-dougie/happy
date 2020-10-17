//Node funciona no fluxo de req e res 
//Sempre que o usuário acessar uma rota o node retorna uma resposta
//Express ajuda a gente a configurar rotas... 
//Node só entende js

import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path'
import cors from 'cors'
import errorHandler from './errors/handler'


//Sempre temos uma única aplicação no nosso código
const app = express();

//informa que será utilizado JSON
app.use(cors())
app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname , '..', 'uploads')))
app.use(errorHandler)


//ROTA => conjunto
// users => recurso     
//Metodos HTTP: get, post, put e delete (significado semântico muda)
//Tipos de parametros: query parms --> enviados na propria rota (mais perigoso e menos indicado)
//EX: http://localhost:3333/users?search=douglas&page=2 concatena com & comercial
//Route params: PUT: http://localhost:3333/users/1 (identificar um recurso)
//body: corpo da requisição, envia dados que não caibam nos parâmetros anteriores (formulários);

//GET: buscar uma informação (lista, item, qqr coisa) -> consigo acessar normalmente na URL do brownser 
//POST: criando uma nova informação;
//PUT: editar uma informação;
//DELETE: Deletar uma informação;


app.listen(3311);


//Driver nativo, Query builder, ORM (object relational mapping)

//DRIVER-NATIVO: permite execuar querys direto pelo node, mas sem abstração;
//Query builder: escreve a query usando JS
//ORM:  Classe do JS que simboliza uma tabela no BD. (tabela: users - classe: User)
//Migration: 'controle' de versão do banco de dados