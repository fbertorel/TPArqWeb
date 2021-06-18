const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const sales = require("../saves/sales.json");
const usersService = require("./users");
const productsService = require("./products");

class SalesService {
  fields = ["products", "userId", "date", "totalPrice"];

  productFields = ["id", "price"];

  getAll = () => {
    return sales;
  }

  getAllByUser = userId => {
    usersService.get(userId);
    return sales.filter(sale => sale.userId === userId);
  }

  getAllByProduct = productId => {
    productsService.get(productId);
    return sales.filter(sale => {
      let matches = false;
      sale.products.forEach(product => {
        if (product.id === productId) {
          matches = true;
        }
      });
      return matches;
    });
  }

  get = id => {
    const sale = sales.find(sale => sale.id === id);
    if (!sale) {
      throw new Error("Sale does not exist");
    }
    return sale;
  }

  create = sale => {
    this.saleError(sale);
    sale.id = uuidv4();
    sales.push(sale);
    fs.writeFileSync("saves/sales.json", JSON.stringify(sales));
    return sale;
  }

  update = sale => {
    const saleIndex = sales.findIndex(pSale => pSale.id === sale.id);
    if (saleIndex === -1) {
      throw new Error("Sale does not exist");
    }
    this.saleError(sale);
    sales[saleIndex] = sale;
    fs.writeFileSync("saves/sales.json", JSON.stringify(sales));
    return sale;
  }

  delete = id => {
    const saleIndex = sales.findIndex(pSale => pSale.id === id);
    if (saleIndex === -1) {
      throw new Error("Sale does not exist");
    }
    sales.splice(saleIndex, 1);
    fs.writeFileSync("saves/sales.json", JSON.stringify(sales));
    return true;
  }

  saleError = sale => {
    sale.products.forEach(product => {
      productsService.get(product.id);  //veo que cada producto exista porque puedo pasar mas de 1. 
    });
    usersService.get(sale.userId);      //veo que el usuario exista.
  }                                     //ambos get ya arrojan error.
}

module.exports = new SalesService();
