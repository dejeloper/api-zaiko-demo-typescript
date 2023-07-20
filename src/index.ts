import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_, res) => {
  res.send("<h1>La api de Zaiko que se usará de Backend</h1>");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
