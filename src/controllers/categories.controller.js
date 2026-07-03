export const createCategory = (req, res) => {//es el controlador para crear una categoría, 
// recibe la solicitud y la respuesta como parámetros
  const { title } = req.body; //desestructuramos el título del cuerpo de la solicitud, es decir,
  //  obtenemos el título de la categoría que se quiere crear

  res.status(201).json({ message: `Categoria creada ${title}` });
}; //201 es el código de estado para indicar que se ha creado un recurso es mas específico que el 200 que es 
// un código de estado genérico para indicar que la solicitud se ha procesado correctamente

export const getCategories = (req, res) => { // controlador para obtener todas las categorías, 
// recibe la solicitud y la respuesta como parámetros
  res.json({ // respondemos con un mensaje en formato JSON que indica que se ha obtenido el listado de categorías
    message: "Listado de categorías",
  });
};

export const getCategoryById = (req, res) => {//controlador para obtener una categoría por su ID, 
// recibe la solicitud y la respuesta como parámetros
  const { id } = req.params; //desestructuramos el ID de los parámetros de la solicitud, es decir, 
  // obtenemos el ID de la categoría que se quiere obtener
  
  res.json({
    message: `Categoría con ID ${id}`,
  });
};

export const updateCategory = (req, res) => {
  const { id } = req.params;

  if (id != 1) {
    // Solo es un ejemplo, solo vendo con una sola categoría, el ID es 1
    return res.status(404).json({ error: "Categoría no encontrada" });
  }

  const { title } = req.body;

  if (!title) {// Si no se proporciona un título en el cuerpo de la solicitud, respondemos con un error 422 
  // (Unprocessable Entity)
    return res.status(422).json({ error: "El title es requerido" });
  }

  res.json({ message: `Se actualizo el ${title} del ID ${id}` });
};

// createdAt, udpatedAt, deletedAt = null -> fecha de eliminación lógica
export const deleteCategory = (req, res) => {
  const { id } = req.params;

  if (id != 1) {
    return res.status(404).json({ error: "Categoría no encontrada" });
  }

  res.json({ message: `Category ID ${id} borrada` });
};