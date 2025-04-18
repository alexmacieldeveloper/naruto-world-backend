import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import characterRoutes from './routes/characterRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/characters', characterRoutes);


app.get("/", (req, res) => {
  res.send("Naruto API is running 🌀");
});

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("✅ MongoDB conectado");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });
