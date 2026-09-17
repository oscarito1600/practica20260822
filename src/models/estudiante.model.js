const mongoose = require('mongoose');

const EstudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  apellido: { type: String, required: true, trim: true },
  edad: { type: Number, required: true, min: 0 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
  activo: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Estudiante', EstudianteSchema);