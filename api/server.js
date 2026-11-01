require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const experienciasRoutes = require("./routes/experiencias");

app.use("/api/experiencias", experienciasRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Hojas de Vida funcionando correctamente"
    });
});


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB conectado correctamente");

        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error al conectar con MongoDB:", error);
    });