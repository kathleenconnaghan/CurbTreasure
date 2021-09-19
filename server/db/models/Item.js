const Sequelize = require('sequelize');
const db = require('../db');

// --------- Item Sequelize Model
const Item = db.define('Item', {

    title: {
      type: Sequelize.STRING,
      validation: {
        notEmpty: true,
        allowNull: false,
      }
    },
    description: {
        type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },

    description: {
        type: Sequelize.TEXT,
    },
    imageUrl: {
      type: Sequelize.TEXT,
      validation: {
        isUrl: true,
      },
      defaultValue: 'https://img.icons8.com/bubbles/2x/treasure-chest.png'
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // primaryKey: true
    }
});


module.exports = Item;