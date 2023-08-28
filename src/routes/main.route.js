const router = require("express").Router();
const { dataMySql } = require("../controllers/main.controller");

router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/mysql", async (req, res) => {
    const rta = await  dataMySql();
    res.json(rta);
    return rta;
});

module.exports = router;
