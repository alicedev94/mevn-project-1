const router = require("express").Router();
const { dataMySql } = require("../controllers/main.controller");

router.get("/", async (req, res) => {
    const rta = await  dataMySql();
    res.json(rta);
    return rta;
});

router.get("/index", async (req, res) => {
  res.render("index");
});

module.exports = router;
