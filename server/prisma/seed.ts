import { games } from './games';
import { PrismaClient } from '@prisma/client';

const prisma =  new PrismaClient();

async function main() {
  for(const game of games) {
    await prisma.game.create({
      data: game
    });
  }
}

main().catch((e) => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})