const Express = require('express');
const Sequelize = require('sequelize');

const databaseConfiguration = require('./config/database');

const express = Express();

// Este função faz com que o middleware interprete as solicitações recebidas e enviadas como um arquivo JSON
express.use(Express.json());

const mysql = databaseConfiguration.production;

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    host: mysql.host,
    dialect: mysql.dialect,
});

express.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
