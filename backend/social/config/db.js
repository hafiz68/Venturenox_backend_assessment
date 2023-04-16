const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');
dotenv.config();


const sequelize = new Sequelize(process.env.SOCIAL_DB, process.env.POSTGRES_USERNAME, process.env.POSTGRES_PASSWORD, {
    dialect: 'postgres',
    host: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: false
    }
});

module.exports = sequelize;