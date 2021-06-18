# Arquitectura Web
Trabajo Practico Arquitectura Web - UP

#### Descripción del negocio
Trata de un sistema de gestion de ventas de packs premium (HBO, FOX, UFC, NBA, etc) basado en un call center. 

Se podra realizar:
- ABM de productos
- ABM de usuarios
- ABM de ventas

---
- Para correr el programa:
```bash
npm start
```
---

#### Endpoints

Metodo  | Endpoint | Body | Response | Status
------------- | ------------- | ------------ | ---------- | ----------
GET  | /users  | - | Muestra todos los usuarios | 200  
GET  | /users/:id  | - | Muestra el usuario que corresponde al ID brindado | 200
GET  | /products  | - | Muestra todos los productos | 200 
GET  | /products/:id  | - | Muestra el producto que corresponde al ID brindado | 200
GET  | /sales  | - | Muestra todas las ventas | 200 
GET  | /sales/:id  | - | Muestra la venta que corresponde al ID brindado | 200 
GET  | /sales/user/:userId  | - | Muestra las compras de un usuario brindado | 200  
GET  | /sales/product/:productId  | - | Muestra las ventas de un producto brindado | 200  
POST  | /users  | {firstname, lastname, dni, mail} | Carga un usuario con el body brindado | 200
POST  | /products  | {name, description, price} | Carga un producto con el body brindado | 200
POST  | /sales  | {products [{id, name, description, price}], userid, price, date} | Carga una venta con el body brindado | 200
PUT  | /users/:id  | {firstname, lastname, dni, mail} | Cambia los campos de un usuario brindado | 200 
PUT  | /products/:id  | {name, description, price} | Cambia los campos de un producto brindado | 200 
PUT  | /sales/:id  | {userid, price, date} | Cambia los campos de una venta brindada | 200 
DELETE  | /users  | - | Elimina un usuario brindado | 200
DELETE  | /products/:id  | - | Elimina un producto brindado | 200
DELETE  | /sales/:id  | - | Elimina una venta brindada | 200
