const mongoose = require('mongoose')
const Shema = mongoose.Schema


const zapatillaSchema = new Shema({

	marca:{
		type : String,
		required : true
	},
	modelo:{
		type : String,
		required : true},
	talle:{
		type : Number,
		required : true},
	color:{
		type : String,
		required : true},
	precio:{
		type : Number,
		required : true},
	img:{
		type : String,
		required : true
		},
	descripcion:{
		type : String} // al no poner required lo toma como optativo	
})

const Zapatilla = mongoose.model('Zapatilla', zapatillaSchema)

module.exports = {Zapatilla}