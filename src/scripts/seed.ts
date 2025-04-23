import dotenv from "dotenv";
import mongoose from "mongoose";
import { Character } from "../models/Character";

dotenv.config();

const characters = [
  {
    name: "Naruto Uzumaki",
    village: "Konoha",
    chakra: 100,
    rank: "Hokage",
    abilities: ["Rasengan", "Kage Bunshin no Jutsu", "Kurama Mode"]
  },
  {
    name: "Sasuke Uchiha",
    village: "Konoha",
    chakra: 95,
    rank: "Nukenin",
    abilities: ["Chidori", "Sharingan", "Amaterasu"]
  },
  {
    name: "Sakura Haruno",
    village: "Konoha",
    chakra: 90,
    rank: "Jounin",
    abilities: ["Força Sobre-Humana", "Regeneração", "Ninjutsu Médico"]
  },
  {
    name: "Kakashi Hatake",
    village: "Konoha",
    chakra: 92,
    rank: "Jounin",
    abilities: ["Raikiri", "Kamui", "Sharingan"]
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("✅ Conectado ao MongoDB");

    await Character.deleteMany({});
    console.log("🧹 Personagens antigos removidos");

    await Character.insertMany(characters);
    console.log("🌱 Novos personagens inseridos");

    mongoose.disconnect();
    console.log("🔌 Conexão encerrada");
  } catch (error) {
    console.error("Erro ao rodar seed:", error);
    mongoose.disconnect();
  }
};

seedDatabase();
