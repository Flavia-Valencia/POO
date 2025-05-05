const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('./services/database'); // Conexión a MongoDB

const Usuario = require('./models/usuarios');
const Envio = require('./models/envios');

const app = express();
app.use(express.json());

// Asignar crédito según plan
const planes = {
    plan30: { credito: 30 },
    plan40: { credito: 40 },
    plan60: { credito: 60 }
  };

// 🔹 Crear un nuevo usuario (asignación directa del plan)
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, plan } = req.body;

    if (!planes[plan]) {
      return res.status(400).json({ error: 'Plan inválido' });
    }

    const nuevoUsuario = new Usuario({
      nombre,
      plan,
      credito: planes[plan].credito
    });

    await nuevoUsuario.save();
    res.json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Ver todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
      const usuarios = await Usuario.find(); // Obtener todos los usuarios de la base de datos
      res.json(usuarios); // Devolver los usuarios en formato JSON
    } catch (err) {
      res.status(500).json({ error: err.message }); // Manejar errores
    }
  });

// 🔹 Ver crédito disponible de un usuario
app.get('/usuarios/:id/credito', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json({ nombre: usuario.nombre, credito: usuario.credito });
});

// 🔹 Registrar un nuevo envío
app.post('/envios', async (req, res) => {
  try {
    const {
      usuario_id,
      nombre,
      direccion,
      telefono,
      referencia,
      observacion,
      producto
    } = req.body;

    const usuario = await Usuario.findById(usuario_id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    if (usuario.credito <= 0) return res.status(400).json({ error: 'Sin crédito disponible' });

    // Calcular precio según peso
    let multiplicador = Math.ceil(producto.peso / 3);
    const precios = { plan30: 135, plan40: 160, plan60: 180 };
    const precioBase = precios[usuario.plan] / planes[usuario.plan].credito;
    const precio_envio = precioBase * multiplicador;

    producto.precio_envio = precio_envio;

    // Crear envío
    const nuevoEnvio = new Envio({
      usuario_id,
      nombre,
      direccion,
      telefono,
      referencia,
      observacion,
      producto
    });

    await nuevoEnvio.save();

    // Descontar crédito
    usuario.credito -= 1;
    await usuario.save();

    res.json(nuevoEnvio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Consultar envíos de un usuario
app.get('/envios/:usuario_id', async (req, res) => {
  const envios = await Envio.find({ usuario_id: req.params.usuario_id });
  res.json(envios);
});

// 🔹 Eliminar un envío y devolver el crédito
app.delete('/envios/:id', async (req, res) => {
  const envio = await Envio.findById(req.params.id);
  if (!envio) return res.status(404).json({ error: 'Envío no encontrado' });

  const usuario = await Usuario.findById(envio.usuario_id);
  if (usuario) {
    usuario.credito += 1;
    await usuario.save();
  }

  await envio.deleteOne();
  res.json({ mensaje: 'Envío eliminado y crédito devuelto' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
