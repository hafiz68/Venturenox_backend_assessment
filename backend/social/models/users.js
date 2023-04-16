const db = require("../config/db");
const { Sequelize } = require('sequelize');

const Users = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  lastName: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  department: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  designation: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  imageUrl: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  city: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  country: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  bio: {
    type: Sequelize.STRING(5000),
    allowNull: true
  },

  socialLinks: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  employeeId: {
    type: Sequelize.STRING(20),
    allowNull: true
  },
  tenanId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
});

module.exports = Users;

