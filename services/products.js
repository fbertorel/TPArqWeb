const fs = require("fs");
const products = require("../saves/products.json");
const { v4: uuidv4 } = require("uuid");   //para generar id unicas

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

  create = product => {
    product.id = uuidv4();    //id unica
    products.push(product);   //agrega producto 
    fs.writeFileSync("saves/products.json", JSON.stringify(products));  //guardo producto en archivo JSON
    return product;
  }

}

module.exports = new ProductsService();
