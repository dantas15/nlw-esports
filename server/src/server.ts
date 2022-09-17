import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { convertHourStringToMinutes } from './utils/convertHourStringToMinutes';
import { convertMinuteToHourString } from './utils/convertMinuteToHourString';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany();

  return response.json(games);
});

app.post('/games/:gameId/ads', async (request, response) => {
  const { gameId } = request.params;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: request.body.name,
      yearsPlaying: request.body.yearsPlaying,
      discord: request.body.discord,
      weekDays: request.body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(request.body.hourStart),
      hourEnd: convertHourStringToMinutes(request.body.hourEnd),
      useVoiceChannel: request.body.useVoiceChannel,
    },
  });

  return response.status(201).json(ad);
});

app.get('/games/:gameId/ads', async (request, response) => {
  const { gameId } = request.params;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return response.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekdays: ad.weekDays.split(','),
        hourStart: convertMinuteToHourString(ad.hourStart),
        hourEnd: convertMinuteToHourString(ad.hourEnd),
      };
    })
  );
});

app.get('/ads/:adId/discord', (request, response) => {
  const { adId } = request.params;

  const ad = prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });
});

app.listen(3333, () => {
  console.log('Server is running @ http://localhost:3333');
});
