const mongoose = require('mongoose')

const seriesSchema= new mongoose.Schema({
    name: {type: String, required: true},
    capitulos: {type: Number, required: true},
    categorias: {type: [String], required: true}, 
    clasificacion: {type: String, required: true},
    formato: {type: String, required: true},
    duracion: {type: String, required: true},
    fechaIngreso: {type: Date, required: true} 
})

module.exports= mongoose.model('series', seriesSchema)