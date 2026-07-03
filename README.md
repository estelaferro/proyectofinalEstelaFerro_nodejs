# Proyecto-final-26134
API RESTfull – Node JS – Express – Firebase – JWT 

## CRUD

### Ejemplo con "Crear producto"
Cliente → envía un POST /productos con datos { "nombre": "Collar", "precio": 100 }.
Ruta → detecta la URL /productos y llama a la función crearProducto.
Controlador → recibe los datos (req.body), usa addDoc para guardarlos en Firebase.
Modelo → define cómo luce un producto (id, nombre, precio).
Firebase → guarda el nuevo documento en la colección productos.
Respuesta → el controlador devuelve al cliente

### Create Product
method: POST
endpoint: /api/products
body:
```json
{
  "name": "Producto 1",
  "price": 100
}
```
response:
```json
{
  "id": 1,
  "name": "Producto 1",
  "price": 100
}
```
status: 201 Product created

### Error Create Product
method: POST
endpoint: /api/products
body:
```json
{
  "name": "Producto 1"
}
```
response:
```json
{
  "error": "El campo price es requerido"
}
```
status: 422

### Ejemplo con "Leer todos los productos"
Cliente → hace GET /productos.
Ruta → llama a la función obtenerProductos.
Controlador → usa getDocs para traer todos los documentos de Firebase.
Modelo → transforma cada documento en un objeto Producto.
Firebase → devuelve la lista completa.
Respuesta → el cliente recibe

### DELETE (DELETE /productos/:id)
Cliente → pide borrar producto con id=abc123
        |
Ruta → detecta DELETE /productos/abc123
        |
Controlador → usar deleteDoc(docRef)
        |
Modelo → no se usa (solo elimina)
        |
Firebase → borra documento
        |
Respuesta → { "message": "Producto eliminado" }
