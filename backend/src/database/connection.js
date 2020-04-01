//importando o knex
const knex = require('knex');
//importando o arquivo de configuração do banco.
const configuration = require('../../knexfile');
//criando a conexão
const connection = knex(configuration.development);

//exportando a conexão
module.exports = connection;