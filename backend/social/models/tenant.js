const db = require("../config/db");
const { Sequelize } = require('sequelize');

const tenant = db.define("tenant", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  address: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  state: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  country: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  zipCode: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  webUrl: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
});

module.exports = tenant;

