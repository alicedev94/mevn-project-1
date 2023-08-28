const sequelize = require("../lib/sequelize");

async function dataMySql () {
    const rta = await sequelize.query("SELECT * FROM login");
    return rta;
}

module.exports = { dataMySql };