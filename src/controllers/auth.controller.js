import { generateToken } from "../utils/token.generator.js";

const default_user = {
  id: 1,
  name: "User",
  email: "user@email.com",
  password: "strongPass123",
  admin: true,
};

export const login = (req, res) => {
  const { email, password } = req.body; //tenemos que lograr que la info que venga en el body de la request sea la que se compare con el usuario por defecto.
 //que es la contraseña que esta mas arriba en default_user. Si no es igual, que devuelva un error. Si es igual, que devuelva un token.
  if (!email || !password) {
    return res.status(400).json({
      message: "Faltan credenciales",
    });
  }

  if (email !== default_user.email || password !== default_user.password) {
    return res.status(401).json({
      message: "Credenciales inválidas",
    });
  }

  const token = generateToken(default_user);

  res.json({
    message: "Login exitoso",
    token,
  });
};
