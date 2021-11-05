const express = require("express");
const hbs = require("hbs");
const path = require("path")
const app = express();

const PORT = process.env.PORT || 3000;

//Init dirr
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

//Setup static dir
app.use(express.static(path.join(__dirname, "../public")));

//Routing
app.get("", (req, res) => {
    res.render("index", {

    })
})

app.get("/*", (req, res) => {
    res.render("404");
})

app.listen(PORT, () => {
    console.log("Server is up!");
})