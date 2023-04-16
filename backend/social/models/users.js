const db = require("../config/db");
const { Sequelize } = require('sequelize');

const Users = db.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(500),
    allowNull: false
  },
  department: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  designation: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  city: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  country: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  bio: {
    type: Sequelize.ENUM('Male', 'Female'),
    allowNull: false
  },

  socialLinks: {
    type: Sequelize.ENUM('Student', 'Admin'),
    allowNull: false,
    defaultValue: 'Student'

  },
  employeeId: {
    type: Sequelize.STRING(20),
    allowNull: true
  },
  tenanId: {
    type: Sequelize.DATE,
    allowNull: true
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  deleteat: {
    type: Sequelize.DATE,
    defaultValue: null
  },
});

module.exports = Users;

