const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/main.route");
const path = require("path");
const engine = require("ejs-mate");


app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


