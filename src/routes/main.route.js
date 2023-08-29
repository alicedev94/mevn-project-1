const router = require("express").Router();
const { json } = require("sequelize");
const { dataMySql, insertDataMySql } = require("../controllers/main.controller");

router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/mysql", async (req, res) => {
    const rta = await  dataMySql();
    res.json(rta);
});

router.get("/insert_mysql", async (req, res) => {
  try {
    const rta = await  insertDataMySql();
    res.json({value: "Usuario registrado con exito.."});
  } catch (error) {
    res.json({value: "No se ha podido registrar el usuario"});
  }
});

module.exports = router;
