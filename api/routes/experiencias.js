const express = require("express");
const Experiencia = require("../models/experiencia");

const router = express.Router();

// con esto obtenemos todas las experiencias
router.get("/", async (req, res) => {
    try {
        const experiencias = await Experiencia.find();

        res.json(experiencias);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener las experiencias",
            error: error.message
        });
    }
});

// esto se usa para obtener una experiencia por ID
router.get("/:id", async (req, res) => {
    try {
        const experiencia = await Experiencia.findById(req.params.id);

        if (!experiencia) {
            return res.status(404).json({
                mensaje: "Experiencia no encontrada"
            });
        }

        res.json(experiencia);

    } catch (error) {
        res.status(400).json({
            mensaje: "ID de experiencia no válido",
            error: error.message
        });
    }
});

// con esto creamos una nueva experiencia
router.post("/", async (req, res) => {
    try {
        const nuevaExperiencia = new Experiencia(req.body);

        const experienciaGuardada = await nuevaExperiencia.save();

        res.status(201).json(experienciaGuardada);

    } catch (error) {
        res.status(400).json({
            mensaje: "Error al crear la experiencia",
            error: error.message
        });
    }
});

//se usa para actualizar una experiencia
router.put("/:id", async (req, res) => {
    try {
        const experienciaActualizada = await Experiencia.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!experienciaActualizada) {
            return res.status(404).json({
                mensaje: "Experiencia no encontrada"
            });
        }

        res.json(experienciaActualizada);

    } catch (error) {
        res.status(400).json({
            mensaje: "Error al actualizar la experiencia",
            error: error.message
        });
    }
});

// eliminar una experiencia
router.delete("/:id", async (req, res) => {
    try {
        const experienciaEliminada = await Experiencia.findByIdAndDelete(
            req.params.id
        );

        if (!experienciaEliminada) {
            return res.status(404).json({
                mensaje: "Experiencia no encontrada"
            });
        }

        res.json({
            mensaje: "Experiencia eliminada correctamente",
            experiencia: experienciaEliminada
        });

    } catch (error) {
        res.status(400).json({
            mensaje: "Error al eliminar la experiencia",
            error: error.message
        });
    }
});

module.exports = router;