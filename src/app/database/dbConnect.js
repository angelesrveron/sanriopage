import mongoose from "mongoose";

//objeto vacío para almacenar el estado de la conexión.
const connection = {};

//función asíncrona llamada dbConnect que establece la conexión.
async function dbConnect() {
  //Verifica si la conexión ya está establecida. Si es así, retorna inmediatamente.
  if (connection.isConnected) {
    return;
  }

//Establece la conexión a la base de datos utilizando la URI almacenada en la variable de entorno MONGODB_URI
  const db = await mongoose.connect(process.env.MONGODB_URI);

  //Actualiza el estado de la conexión en el objeto connection.  devuelve el estado de la conexión (1 = conectado, 0 = desconectado).
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;