const Commerce = require('../models/commerceModel');

const createCommerce = async (req, res) => {
  try {
    const { RUC, NombreComercial, RazonSocial, Direccion, Telefono, NombreContacto, TipoEstablecimiento } = req.body;
    const ImagenLogotipo = req.file ? req.file.buffer : null;

    const newCommerce = await Commerce.create({
      RUC,
      NombreComercial,
      RazonSocial,
      Direccion,
      Telefono,
      NombreContacto,
      TipoEstablecimiento,
      ImagenLogotipo
    });

    res.status(201).json(newCommerce);
  } catch (error) {
    console.error('Error creating commerce:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllCommerces = async (req, res) => {
    try {
      const commerces = await Commerce.findAll();
      res.status(200).json(commerces);
    } catch (error) {
      console.error('Error fetching commerces:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
  createCommerce,
  getAllCommerces
};
