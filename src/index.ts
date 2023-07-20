import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_, res) => {
  console.log("Inicio");
  res.send("Inicio");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
