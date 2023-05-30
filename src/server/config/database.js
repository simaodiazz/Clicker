const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'spring', 
    'root', 
    '', 
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectedUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;

module.exports = sequelize