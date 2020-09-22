const Sequelize = require('sequelize');
const { STRING, INTEGER, BOOLEAN } = Sequelize;
const db = require('../db');

const Phone = db.define('phones', {
  model: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  price: {
    type: INTEGER,
    allowNull: false,
  },

  camera: {
    type: STRING,
    validate: {
      notEmpty: true,
    },
  },

  battery: {
    type: STRING,
    allowNull: false,
  },

  is5GCapable: {
    type: BOOLEAN,
    defaultValue: false,
  },

  imageURL: {
    type: STRING,
    allowNull: false,
  },
});

Phone.findBy5GCapability = function () {
  return this.findAll({
    where: {
      is5GCapable: true,
    },
  });
};

module.exports = {
  Phone,
};
