const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('./services/database'); // Conexión a MongoDB

const Usuario = require('./models/usuarios');
const Envio = require('./models/envios');
const Producto = require('./models/productos');

const app = express();
app.use(express.json());

// Asignar crédito según plan
const planes = {
  plan30: { credito: 30 },
  plan40: { credito: 40 },
  plan60: { credito: 60 }
};

// Crear un nuevo usuario (asignación directa del plan)
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

// Ver todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find(); 
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  Ver crédito disponible de un usuario
app.get('/usuarios/:id/credito', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json({ nombre: usuario.nombre, credito: usuario.credito });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Registrar un nuevo envío
app.post('/envios', async (req, res) => {
  try {
    const {
      usuario_id,
      nombre,
      direccion,
      telefono,
      referencia,
      observacion
    } = req.body;

    const usuario = await Usuario.findById(usuario_id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    if (usuario.credito <= 0) return res.status(400).json({ error: 'Sin crédito disponible' });
   
    
    // Crear el envio
    const nuevoEnvio = new Envio({
      usuario_id,
      nombre,
      direccion,
      telefono,
      referencia,
      observacion
    });

    await nuevoEnvio.save();

    res.json(nuevoEnvio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Consultar envíos de un usuario
app.get('/envios/:usuario_id', async (req, res) => {
  try {
    const envios = await Envio.find({ usuario_id: req.params.usuario_id });
    res.json(envios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar un envío y devolver el crédito 
app.delete('/envios/:id', async (req, res) => {
    try {
      const envio = await Envio.findById(req.params.id);
      if (!envio) return res.status(404).json({ error: 'Envío no encontrado' });
  
      const usuario = await Usuario.findById(envio.usuario_id);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  
      // Buscar los productos relacionados
      const productos = await Producto.find({ envioId: envio._id });
  
      if (!productos.length) {
        await envio.deleteOne();
        return res.json({ mensaje: 'Envío eliminado. No había productos asociados, no se devolvieron créditos.' });
      }
  
      // Calcular créditos
      const creditosADevolver = productos.reduce((total, producto) => total + producto.creditoUsado, 0);
  
      // Eliminar productos
      await Producto.deleteMany({ envioId: envio._id });
  
      // Eliminar el envío
      await envio.deleteOne();
  
      // Devolver créditos al usuario
      usuario.credito += creditosADevolver;
      await usuario.save();
  
      res.json({
        mensaje: `Envío y productos eliminados correctamente. Se devolvieron ${creditosADevolver} crédito(s) al usuario.`
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
//  Crear producto y descontar crédito según peso
app.post('/productos', async (req, res) => {
    try {
      const { envioId, descripcion, peso, bultos, fecha_entrega } = req.body;
  
      const envio = await Envio.findById(envioId);
      if (!envio) return res.status(404).json({ error: 'Envío no encontrado' });
  
      const usuario = await Usuario.findById(envio.usuario_id);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
  
      // Calcular descuento de crédito
      const pesoFactor = Math.ceil(peso / 3); // 1 crédito por cada 3 lb
      if (usuario.credito < pesoFactor) {
        return res.status(400).json({ error: `Crédito insuficiente. Requiere ${pesoFactor} crédito(s)` });
      }
  
      // Descontar créditos según peso
      usuario.credito -= pesoFactor;
      await usuario.save();
  
      // Crear el producto con el crédito usado
      const nuevoProducto = new Producto({
        envioId,
        descripcion,
        peso,
        bultos,
        fecha_entrega,
        creditoUsado: pesoFactor // Guardar el crédito
      });
  
      await nuevoProducto.save();
  
      res.status(201).json(nuevoProducto);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
