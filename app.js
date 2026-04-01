require('dotenv').config();
const express = require('express');

const app = express();

const productRoutes = require('./src/routes/productRoutes');

// ruta base
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});