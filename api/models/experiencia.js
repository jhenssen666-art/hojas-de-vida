const mongoose = require("mongoose");

const experienciaSchema = new mongoose.Schema({
    persona: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    duracion: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Experiencia", experienciaSchema);