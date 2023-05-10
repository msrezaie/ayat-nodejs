const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");

// parser the incoming data from req.body through a form request
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// serving static files
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

const PORT = 4000;

app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));
