const { Sequelize, sequelize } = require('../config/database');

const User = sequelize.define('User', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Sincronizar o modelo com o banco de dados
User.sync({ force: false })
  .then(() => {
    console.log('Tabela de usuários sincronizada com o banco de dados');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar a tabela de usuários:', error);
  });

module.exports = User;
