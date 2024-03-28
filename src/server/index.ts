import 'reflect-metadata'; //deve estar na primeira linha do arquivo
import '../database';
import express from "express";

const app = express();
const port = 3000;

app.use(express.json())
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
