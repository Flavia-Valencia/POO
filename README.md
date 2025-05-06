
### 1 Crear usuario con plan.

**POST** `POST/usuarios`

```json
{
  "nombre": "Dinora Sanchez",
  "plan": "plan60" 
}
```

### 2️ Consultar crédito disponible: Reemplazar el "id" por el id asignado al usuario creado.

**GET** `/usuarios/id/credito`

Ejemplo:  
`http://localhost:3000/usuarios/6637b99f0c75dba9e85f1080/credito`

---

### 3️ Registrar un envío: Reemplazar el "id" por el id del usuario asignado.

**POST** `/envios`

```json
{
  "usuario_id": "id",
  "nombre": "Dinora Sanchez",
  "direccion": "San Miguel",
  "telefono": "7777-8888",
  "referencia": "Por el árbol de mango",
  "observacion": "Llamar antes de llegar"
}
```
### 4 Consultar los envios de un usuario: Reemplazar el "id" por el id del usuario asignado.

**GET** `/envios/usuario_id`

Ejemplo:  
`http://localhost:3000/envios/6637b99f0c75dba9e85f1080`

---

### 5 Agregar producto al envío: Colocar el id generado del envio.

**POST** `/productos`

```json
{
  "envioId": "ID_DEL_ENVIO_GENERADO",
  "descripcion": "Ropa de bebé",
  "peso": 9,
  "bultos": 1,
  "fecha_entrega": "06-07-2025"
}
```

### 6️ Eliminar un envío: Reemplazar el "id" por el id del envio que va a eliminar.

**DELETE** `/envios/envioId`

Ejemplo:  
`http://localhost:3000/envios/ID_DEL_ENVIO`


## Autor

Desarrollado por: **Flavia Valencia**  
Parcial #2 de POO – 2025
