import React, { useState, useEffect } from 'react';
import { createCommerce, getAllCommerces } from '../services/commerceService';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommerceForm = () => {
  const [formData, setFormData] = useState({
    RUC: '',
    NombreComercial: '',
    RazonSocial: '',
    Direccion: '',
    Telefono: '',
    NombreContacto: '',
    TipoEstablecimiento: 'Restaurante',
    ImagenLogotipo: null
  });

  const [commerces, setCommerces] = useState([]);

  useEffect(() => {
    fetchCommerces();
  }, []);

  const fetchCommerces = async () => {
    try {
      const response = await getAllCommerces();
      setCommerces(response); // Asumimos que response es un array válido de commerces
    } catch (error) {
      console.error('Error fetching commerces:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      await createCommerce(formDataToSend);
      alert('Commerce created successfully!');
      fetchCommerces(); // Refresh the list of commerces after creation
    } catch (error) {
      console.error('Error creating commerce:', error);
      alert('Failed to create commerce');
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Formulario de Comercio</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="RUC" className="form-label">RUC</label>
            <input type="text" name="RUC" value={formData.RUC} onChange={handleChange} className="form-control" placeholder="RUC" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="NombreComercial" className="form-label">Nombre Comercial</label>
            <input type="text" name="NombreComercial" value={formData.NombreComercial} onChange={handleChange} className="form-control" placeholder="Nombre Comercial" required />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="RazonSocial" className="form-label">Razón Social</label>
            <input type="text" name="RazonSocial" value={formData.RazonSocial} onChange={handleChange} className="form-control" placeholder="Razón Social" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="Direccion" className="form-label">Dirección</label>
            <input type="text" name="Direccion" value={formData.Direccion} onChange={handleChange} className="form-control" placeholder="Dirección" required />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="Telefono" className="form-label">Teléfono</label>
            <input type="text" name="Telefono" value={formData.Telefono} onChange={handleChange} className="form-control" placeholder="Teléfono" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="NombreContacto" className="form-label">Nombre de Contacto</label>
            <input type="text" name="NombreContacto" value={formData.NombreContacto} onChange={handleChange} className="form-control" placeholder="Nombre de Contacto" required />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="TipoEstablecimiento" className="form-label">Tipo de Establecimiento</label>
            <select name="TipoEstablecimiento" value={formData.TipoEstablecimiento} onChange={handleChange} className="form-control">
              <option value="Restaurante">Restaurante</option>
              <option value="Transporte">Transporte</option>
              <option value="Hotel">Hotel</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="ImagenLogotipo" className="form-label">Imagen de Logotipo</label>
            <input type="file" name="ImagenLogotipo" onChange={handleChange} className="form-control-file" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Crear Comercio</button>
      </form>

      <h2 className="my-4">Lista de Comercios</h2>

      <div className="row">
        {commerces && commerces.map((commerce) => (
          <div key={commerce.ComercioID} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{commerce.NombreComercial}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{commerce.RazonSocial}</h6>
                <p className="card-text">{commerce.Direccion}</p>
                <p className="card-text">{commerce.Telefono}</p>
                <p className="card-text">{commerce.NombreContacto}</p>
                <p className="card-text">{commerce.TipoEstablecimiento}</p>
                {commerce.ImagenLogotipo && (
                  <img src={`data:image/jpeg;base64,${btoa(new Uint8Array(commerce.ImagenLogotipo.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`} alt="Logotipo" className="card-img-top" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommerceForm;
