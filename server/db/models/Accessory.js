const Sequelize = require('sequelize');
const { STRING, INTEGER, ENUM } = Sequelize;
const db = require('../db');

const Accessory = db.define(
  'accessories',
  {
    manufacturer: {
      type: STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    category: {
      type: ENUM(['cover', 'screen protector', 'audio', 'charger']),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    price: {
      type: INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: true,
      },
    },

    warranty: {
      type: ENUM(['one-year', '3-years', 'lifetime']),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    hooks: {
      beforeCreate: function (accessory) {
        const newYorkTaxRate = 8.88;
        accessory.price =
          accessory.price + accessory.price * (newYorkTaxRate / 100);
      },
    },
  }
);

Accessory.findByManufacturer = function (manufacturer) {
  return this.findOne({
    where: {
      manufacturer,
    },
  });
};

module.exports = Accessory;
