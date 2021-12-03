const express = require("express");
const hbs = require("hbs");
const app = express();
const port = 8080;

// Handlebars
app.set("view engine", "hbs");

// Handlebars components
hbs.registerPartials(__dirname + "/views/components");

// Función middleware para servir contenido estático
app.use(express.static("public"));

// Servir contenido
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Javier Callejón",
    titulo: "Prácticas con NodeJS",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Javier Callejón",
    titulo: "Prácticas con NodeJS",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Javier Callejón",
    titulo: "Prácticas con NodeJS",
  });
});

app.get("/*", (req, res) => {
  res.render("404", {
    nombre: "Javier Callejón",
    titulo: "Prácticas con NodeJS",
  });
});

app.listen(port, () => {
  console.log(`La app está escuchando: http://localhost:${port}`);
});
