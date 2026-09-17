const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  codigo: { type: String, required: true, unique: true, trim: true },
  descripcion: { type: String, default: '' },
  creditos: { type: Number, min: 1, default: 1 },
  activo: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Curso', CursoSchema);