const { getProducts } = require('../services/productService');

const getProcessedProducts = async (req, res) => {
  try {
    const products = await getProducts();

    const result = products.map(p => {
      const finalPrice = p.price * 1.16;

      return {
        id: p.id,
        title: p.title,
        price: Number(finalPrice.toFixed(2)),
        stock: p.stock,
        brand: p.brand,
        category: p.category,
        isLowStock: p.stock < 10
      };
    });

    // ordenar de mayor a menor
    result.sort((a, b) => b.price - a.price);

    res.status(200).json({
        succes: true,
        count: result.length,
        data: result
    });

  } catch (error) {
    res.status(500).json({
        success: false,
        message: error.message
    });
  }
};

module.exports = { getProcessedProducts };