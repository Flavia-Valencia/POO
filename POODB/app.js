const express = require('express')
const series= require('./models/series')

require ('./services/database') //Requerimiento de servicio de la base de datos

const app = express()
require('dotenv').config()
const port= process.env.PORT

app.use(express.json())

//Método GET devuelve todo
app.get('/series',async (req, res) => {
    try{
        const serie= await series.find()
        res.json(serie)

    } catch(err){
        res.status(500).json({ error: 'Error al obtener las series'})

    }
})

//Método GET por ID
app.get('/series/:id', async (req, res)=>{     
    try{
        const serie = await series.findById(req.params.id)
        if(!serie){
            return res.status(404).json({ error: 'Serie no encontrada'})
        }
        res.json(serie)
    } catch(err){
        res.status(500).json({ error: 'Error al obtener la serie'})
    }
})

//Método POST: crea nueva serie
app.post('/series', async (req, res)=>{
    try{
        const {name, capitulos, categorias, clasificacion, formato, duracion, fechaIngreso } = req.body

        if(!name || !capitulos || !categorias || !clasificacion || !formato || !duracion || !fechaIngreso){
            return res.status(400).json({ error: 'Faltan campos obligatorios'})

        }
        const nuevaSerie = new series({
            name,
            capitulos,
            categorias,
            clasificacion,
            formato,
            duracion,
            fechaIngreso
        })

        const serieGuardada = await nuevaSerie.save()
        res.status(201).json(serieGuardada)
    }catch(err){
        res.status(500).json({ error: 'Error al crear la serie'})

    }
})

//Método PUT: actualiza la información de una serie existente según id
app.put('/series/:id', async (req, res)=>{
    try{
        const {name, capitulos, categorias, clasificacion, formato, duracion, fechaIngreso } = req.body

        if(!name || !capitulos || !categorias || !clasificacion || !formato || !duracion || !fechaIngreso){ //valida que todos los campos sean verdaderos
            return res.status(400).json({ error: 'Faltan campos obligatorios'})

        }
        const serieActualizada = await series.findByIdAndUpdate(
            req. params.id,
            {name, capitulos, categorias, clasificacion, formato, duracion, fechaIngreso },
            {new: true}
        )

        if(!serieActualizada){
            return res.status(404).json({ error: 'Serie no encontrada'})
        }
        res.json(serieActualizada)
    }catch(err){
        res.status(500).json({ error: 'Error al actualizar la serie'})

    }
})

//Metodo DELETE: elimina 
app.delete('/series/:id', async ( req, res) => {
    try { 
        const serieEliminada = await series.findByIdAndDelete(req.params.id)

        if(!serieEliminada){
            return res.status(404).json({ error: 'Serie no encontrada'})
        }
        res.json({ message: 'Serie eliminada correctamente'})
    }catch(err){
        res.status(500).json({ error: 'Error al eliminar la serie'})

    }

}) 

//Método PATCH: actualiza un campo en especifico
app.patch('/series/:id', async (req, res)=>{
    try{
        const campoActualizado= await series.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        if(!campoActualizado) {
            return res.status(404).json({ error: 'Serie no encontrada'})

        }

        res.json(campoActualizado)
    }catch(err){
        res.status(500).json({ error: 'Error al actualizar el campo deseado'})
    }
})

app.listen(port, ()=>
    console.log("Servidor corriendo exitosamente")
)