import express from "express";
import { PrismaClient} from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/games', async (request, response) => {
const games =  await prisma.game.findMany();

return response.json(games);
});

app.listen(3333, () => {
  console.log("Server is running @ http://localhost:3333");
});
