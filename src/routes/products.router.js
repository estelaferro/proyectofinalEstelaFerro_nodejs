import { Router } from "express"; // Creamos un router para manejar las rutas relacionadas con productos

const router = Router();// creamos una variable router que es una instancia de Router, esto nos permite definir 
// rutas específicas para productos sin afectar otras partes de la aplicación.
import { 
  getProducts, 
  getProductById,
  createProduct,
  deleteProduct } 
  from "../controllers/products.controllers.js"; // Importamos la función getProducts desde el controlador de productos
//esta función se encarga de manejar la lógica para obtener los productos, y la usaremos en la ruta GET /products para enviar la lista de productos como respuesta.
import { auth } from "../middlewares/auth.middleware.js";

// Prefijo: /api/products

router.get("/",  getProducts); // Ruta raíz del router, 
// que podría usarse para mostrar un mensaje 
// de bienvenida o información general sobre 
// los productos.
router.get ("/:id", getProductById); // Ruta para obtener un producto específico por su ID,
// cuando se hace una solicitud GET a /products/:id, 
// se ejecutará la función getProductById, que buscará el producto con el ID proporcionado y lo devolverá como respuesta. Si el producto no se encuentra, se enviará un mensaje de error indicando que el producto no fue encontrado.
router.post ("/", auth, createProduct); // Ruta para crear un nuevo producto,
// cuando se hace una solicitud POST a /products, 
// se ejecutará la función createProduct, que tomará los datos del nuevo producto desde el cuerpo de la solicitud, lo agregará a la lista de productos y devolverá el nuevo producto creado como respuesta.
router.delete("/:id", auth, deleteProduct); // Ruta
//  para eliminar un producto por su ID,

export default router; //lo exportamos para usarlo en index.js 
//al exportar por default podemos importarlo con el nombre que queramos,
//  pero es común usar el mismo nombre para mantener la claridad.
//exporto para compartirlo con otros archivos, en este caso con index.js, donde lo importaremos para usarlo como middleware y manejar las rutas de productos.