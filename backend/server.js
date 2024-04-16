const express = require("express");
const connectDB = require("./config/db");
const { required } = require("nodemon/lib/config");
const dotenv = require("dotenv").config();
const port = 5000;

//Connexion à la BDD

connectDB();

const app = express();

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("../backend/routes/post.routes"));

app.listen(port, () => console.log("Le serveur a demarré au port" + "" + port));
