const axios = require('axios');

const API_URL = process.env.API_URL;

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);

    if (!response.data.products) {
      throw new Error('Datos incompletos');
    }

    return response.data.products;

  } catch (error) {
    console.error('Error en API externa:', error.message);
    return []; // fallback
  }
};

module.exports = { getProducts };