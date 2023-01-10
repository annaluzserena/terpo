const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.set('views', './src/views');

const mainRoutes = require("./src/routes/main");

app.listen(process.env.PORT || 8080, () => {
    console.log("Servidor corriendo en el puerto 8080");
});

app.use('/', mainRoutes);