import dotenv from "dotenv"; // traemos las variables de entorno 
dotenv.config(); //ejecutamos la var, las levanta y las incorpora en el puerto.

import app from "./app.js"; // aca esta el servidor con express

const PORT = process.env.PORT || 3001; //definimos puerto con dos opciones 3000 y 3001 x si se rompe el 3000.

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
