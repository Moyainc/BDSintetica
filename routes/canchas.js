const express = require('express');
const router = express.Router();
const Cancha = require('../models/cancha');

// Obtener todas las canchas
router.get('/', async (req, res) => {
    try {
        const canchas = await Cancha.find();
        res.json(canchas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las canchas' });
    }
});

// Obtener una cancha por su ID
router.get('/:id', async (req, res) => {
    try {
        const cancha = await Cancha.findById(req.params.id);
        if (!cancha) {
            return res.status(404).json({ message: 'Cancha no encontrada' });
        }
        res.json(cancha);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la cancha' });
    }
});

// POST /canchas - crear una cancha (uso inicial para poblar datos)
router.post('/', async (req, res) => {
    try {
        const nuevaCancha = await Cancha.create(req.body);
        res.status(201).json(nuevaCancha);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear cancha', error: error.message });
    }
});
module.exports = router;