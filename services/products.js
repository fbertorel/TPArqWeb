const fs = require("fs");
const products = require("../saves/products.json");

class ProductsService {
  fields = ["name", "description", "price"];

  getAll = () => {
    return products;
  }

  get = id => {
    const product = products.find(product => product.id === id);
    if (!product) {
      throw new Error("Product does not exist");
    }
    return product;
  }

  delete = id => {
    const productIndex = products.findIndex(pProduct => pProduct.id === id);
    if (productIndex === -1) {
      throw new Error("Product does not exist");
    }
    products.splice(productIndex, 1);
    fs.writeFileSync("saves/products.json", JSON.stringify(products));
    return true;
  }
}

module.exports = new ProductsService();
