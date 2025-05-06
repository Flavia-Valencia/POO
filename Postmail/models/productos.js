const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  envioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Envio', required: true },
  descripcion: { type: String, required: true },
  peso: { type: Number, required: true },
  bultos: { type: Number, required: true },
  fecha_entrega: { type: Date, required: true },
  creditoUsado: { type: Number, required: true }
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
