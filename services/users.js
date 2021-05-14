const fs = require("fs");
const users = require("../saves/users.json");

class UsersService {
  fields = ["mail", "firstname", "lastname", "document"];


  getAll = () => {
    return users;
  }

  get = id => {
    const user = users.find(user => user.id === id);    //en la lista de usuarios (en saves) voy a buscar el value de los ID que sean iguales al id que le paso por param.
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  delete = id => {
    const userIndex = users.findIndex(pUser => pUser.id === id);
    if (userIndex === -1) {
      throw new Error("User not found");
    }
    users.splice(userIndex, 1);       //corto el usuario que busque el id
    fs.writeFileSync("saves/users.json", JSON.stringify(users));      //grabo archivo para grabar cambios
    return true;
  }
}

module.exports = new UsersService();
