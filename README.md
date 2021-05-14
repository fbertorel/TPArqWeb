# Arquitectura Web
Trabajo Practico Arquitectura Web - UP

#### Descripción del negocio
Trata de un sistema de gestion de ventas de packs premium (HBO, FOX, UFC, NBA, etc) basado en un call center. 

Se podra realizar:
- ABM de productos
- ABM de usuarios
- ABM de ventas

A pensar: Los vendedores obtienen comision y se puede realizar un GET para saber cuanto ganan (por vendedor (seria el total que gano?) o podria ser por venta).


#### Endpoints

  Metodo ---->     Path ---->     Body ---->     Response ---->     Status code
- GET ---->     /users          ---->                                       Muestra todos los usuarios ---->     200
- GET ---->     /users/{id}     ---->                                       Muestra el usuario que corresponde al {id} brindado ----> 200    
- GET ---->     /sales          ---->                                       Muestra todas las ventas ---->     
- GET ---->     /sales/{id}     ---->                                       Muestra la venta que corresponde al {id} brindado ---->     
- GET ---->     /products       ---->                                       Muestra todos los productos ---->     200
- GET ---->     /products/{id}  ---->                                       Muestra el producto que corresponde al {id} brindado ---->     200  
- POST ---->    /users          ---->   {firstname, lastname, dni, mail}    Carga un usuario con el body brindado ---->     
- POST ---->    /sales          ---->   {userid, price, date}               Carga una venta con el body brindado ---->     
- POST ---->    /products       ---->   {name, price}                       Carga un producto con el body brindado ---->     
- PUT ---->     /users/{id}     ---->   {firstname, lastname, dni, mail}    Cambia los campos de un usuario brindado {id} ---->     
- PUT ---->     /sales/{id}     ---->   {userid, price, date}               Cambia los campos de una venta brindada {id} ---->     
- PUT ---->     /products/{id}  ---->   {name, price}                       Cambia los campos de un producto brindado {id} ---->     
- DELETE ---->  /users/{id}     ---->                                       Elimina un usuario brindado {id} ---->     200
- DELETE ---->  /sales/{id}     ---->                                       Elimina una venta brindada {id}   ---->     
- DELETE ---->  /products/{id}  ---->                                       Elimina un producto brindado {id} ---->     200
