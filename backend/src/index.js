//incorporando o modulo express.
const express = require('express');

//incorporando função de tratativa de erro do modulo de validação celebrate.
const { errors } = require('celebrate');

//incorporando o modulo de segurança.
const cors = require('cors');

//incorporando o modulo das rotas.
const routes = require('./routes');

//recebendo a execussão da função do express na constante app.
const app = express();

//modulo de seguranç<a href="" className=""></a>
app.use(cors());

//indicando ao express o uso do json nas requisições.
app.use(express.json());

//indicando o uso das rotas
app.use(routes);
app.use(errors());

app.listen('3333');