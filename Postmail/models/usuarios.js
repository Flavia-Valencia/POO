const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  plan: { type: String, enum: ['plan30', 'plan40', 'plan60'], required: true },
  credito: { type: Number, required: true }, // Cantidad de envíos disponibles
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
