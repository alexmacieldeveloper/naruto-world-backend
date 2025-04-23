# 🌌 Naruto World API

API RESTful feita com Node.js, Express e MongoDB para gerenciar personagens do universo de Naruto.  
Ideal para consumir em projetos front-end, apps de fãs ou estudos de full stack.

---

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- MongoDB Atlas
- Mongoose
- dotenv
- CORS

---

## 📦 Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/naruto-world-backend.git
cd naruto-world-backend

# Instalar dependências
npm install

# Criar o .env
cp .env.example .env
```

No arquivo `.env`, insira sua URI do MongoDB Atlas:

```env
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/?retryWrites=true&w=majority
PORT=5000
```

---

## 🧬 Rodando a API

```bash
# Em desenvolvimento com TS
npx ts-node-dev src/index.ts
```

---

## 🌱 Seed do Banco

Você pode popular o banco com personagens base:

```bash
npm run seed
```

---

## 📡 Endpoints

| Método | Rota             | Descrição                       |
|--------|------------------|----------------------------------|
| GET    | `/characters`    | Lista todos os personagens      |
| POST   | `/characters`    | Cria um novo personagem         |
| GET    | `/characters/:id`| Busca um personagem por ID      |

---

## 📁 Estrutura

```
src/
├── models/          # Modelos Mongoose
├── routes/          # Rotas da API
├── scripts/         # Seed do banco
├── index.ts         # App principal
```

---

## ✨ Exemplo de personagem

```json
{
  "name": "Naruto Uzumaki",
  "village": "Konoha",
  "chakra": 100,
  "rank": "Hokage",
  "abilities": ["Rasengan", "Kage Bunshin no Jutsu"]
}
```

---

## 🌀 Autor

Feito por [Álex Maciel](https://github.com/alexmacieldeveloper) com paixão por programação e Naruto 🦊

---

## 📜 Licença

MIT