const db = require("../config/db");
const { Sequelize } = require('sequelize');

const tenant = db.define("tenant", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  address: {
    type: Sequelize.STRING(5000),
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  state: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  country: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  zipCode: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  phone: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  webUrl: {
    type: Sequelize.STRING(255),
    allowNull: true
  }
});

module.exports = tenant;

