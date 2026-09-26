// controllers/reservaController.js
const Reserva = require('../models/reserva');
const Cancha = require('../models/cancha');

async function hayCruceDeHorario(cancha, fecha, horaInicio, horaFin, idExcluir = null) {
    const filtro = {
        cancha: cancha,
        fecha: fecha,
        horaInicio: { $lt: horaFin },
        horaFin: { $gt: horaInicio }
    };

    if (idExcluir) {
        filtro._id = { $ne: idExcluir };
    }

    const conflicto = await Reserva.findOne(filtro);
    return conflicto !== null;
}
exports.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener reservas', error: error.message });
    }
};
exports.obtenerReservaPorId = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (!reserva) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        res.json(reserva);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener reserva', error: error.message });
    }
};
exports.crearReserva = async (req, res) => {
    try {
        const { cancha, clienteNombre, clienteTelefono, fecha, horaInicio, horaFin } = req.body;

        const cruce = await hayCruceDeHorario(cancha, fecha, horaInicio, horaFin);
        if (cruce) {
            return res.status(409).json({ mensaje: 'Ya existe una reserva en ese horario para esta cancha' });
        }

        const canchaInfo = await Cancha.findOne({ numero: cancha });
        const precioTotal = canchaInfo ? canchaInfo.precioHora : 120000;

        const nuevaReserva = await Reserva.create({
            cancha, clienteNombre, clienteTelefono, fecha, horaInicio, horaFin, precioTotal
        });

        res.status(201).json(nuevaReserva);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear reserva', error: error.message });
    }
};
exports.actualizarReserva = async (req, res) => {
    try {
        const { cancha, fecha, horaInicio, horaFin } = req.body;

        if (cancha && fecha && horaInicio && horaFin) {
            const cruce = await hayCruceDeHorario(cancha, fecha, horaInicio, horaFin, req.params.id);
            if (cruce) {
                return res.status(409).json({ mensaje: 'Ese horario ya está ocupado para esta cancha' });
            }
        }
        const reservaActualizada = await Reserva.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!reservaActualizada) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        res.json(reservaActualizada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar reserva', error: error.message });
    }
};
exports.eliminarReserva = async (req, res) => {
    try {
        const reservaEliminada = await Reserva.findByIdAndDelete(req.params.id);
        if (!reservaEliminada) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        res.json({ mensaje: 'Reserva eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar reserva', error: error.message });
    }
};