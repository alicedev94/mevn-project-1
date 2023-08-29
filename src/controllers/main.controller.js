const sequelize = require("../lib/sequelize");

async function dataMySql () {
    const rta = await sequelize.query("SELECT * FROM login");
    return rta;
}

async function insertDataMySql () {
    const rta = await sequelize.query
    (`
        INSERT INTO login(email, password, rol) VALUES ("alicedev96@gmail.com", "8a6df1d696c3b3c6a4ac65eb4229c9e71687c149ef12a65", "customer");
    `
    );
    return rta;
}

module.exports = { dataMySql, insertDataMySql };