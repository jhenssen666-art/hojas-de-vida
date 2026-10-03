require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Permitir que la API reciba datos en formato JSON
app.use(express.json());

// Importar rutas de experiencias
const experienciasRoutes = require("./routes/experiencias");

// Utilizar las rutas
app.use("/api/experiencias", experienciasRoutes);

// Ruta principal de prueba
app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Hojas de Vida funcionando correctamente"
    });
});

// Conectar con MongoDB
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