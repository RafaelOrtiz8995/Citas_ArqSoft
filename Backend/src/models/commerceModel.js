const { DataTypes } = require('sequelize');
const sequelize = require('../models/database');

const Commerce = sequelize.define('Commerce', {
  ComercioID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  RUC: {
    type: DataTypes.STRING,
    allowNull: false
  },
  NombreComercial: {
    type: DataTypes.STRING,
    allowNull: false
  },
  RazonSocial: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Direccion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  NombreContacto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  TipoEstablecimiento: {
    type: DataTypes.ENUM('Restaurante', 'Transporte', 'Hotel'),
    allowNull: false
  },
  ImagenLogotipo: {
    type: DataTypes.BLOB,
    allowNull: true
  }
}, {
  tableName: 'Comercios',
  timestamps: false
});

module.exports = Commerce;
