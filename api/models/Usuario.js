module.exports = {
  attributes: {
    usuarioid: { type: 'string'},
    usuarionombre: { type: 'string' },
    telefonos: {
      collection: 'telefono',
      via: 'owner'
    }
  },
};