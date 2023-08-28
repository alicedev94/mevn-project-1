const { Sequelize  } = require("sequelize");
//require("dotenv").config();

const sequelize = new Sequelize(
  "tiendas_daka_prod",
  "root",
  "alicepassword",
  {
    host: 'localhost',
    dialect: 'mysql',
        timezone: '-04:00', //for writting from database
    dialectOptions: {
      options: {
       // useUTC: false, //for reading from database
        encrypt: false,
      },
    },
  }
);

//setupModels(sequelize);
//sequelize.sync();

module.exports = sequelize;