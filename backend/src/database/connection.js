//importando o knex
const knex = require('knex');
//importando o arquivo de configuração do banco.
const configuration = require('../../knexfile');
//setando variável ambiente para testes
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
//criando a conexão
const connection = knex(config);

//exportando a conexão
module.exports = connection;