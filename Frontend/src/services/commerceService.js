import axios from 'axios';

const API_URL = 'http://localhost:5000/api/commerce';

// Función para crear un comercio
export const createCommerce = async (commerceData) => {
  try {
    const response = await axios.post(API_URL, commerceData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating commerce:', error);
    throw error;
  }
};

// Función para obtener todos los comercios
export const getAllCommerces = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else {
      return []; // Retorna un array vacío si la respuesta no es válida
    }
  } catch (error) {
    console.error('Error fetching commerces:', error);
    throw error;
  }
};
