const { Schema, model } = require('mongoose')

const DiscotecaSchema = Schema({

  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },

  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true
  },

  address: {
    type: String,
    required: [true, 'La dirección es obligatoria'],
    unique: true
  },

  tags: {
    type: String,
    default: " "
  },

  img: {
    type: String
  },

  state: {
    type: Boolean,
    default: true
  },

})

module.exports = model('Discoteca', DiscotecaSchema)
