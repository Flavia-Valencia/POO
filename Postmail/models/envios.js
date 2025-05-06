const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  descripcion: { type: String, required: true },
  peso: { type: Number, required: true },
  bultos: { type: Number, required: true },
  fecha_entrega: { type: Date, required: true },
  precio_envio: { type: Number },
});

const EnvioSchema = new mongoose.Schema({
  usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  nombre: String,
  direccion: String,
  telefono: String,
  referencia: String,
  observacion: String,
});

module.exports = mongoose.model('Envio', EnvioSchema);
