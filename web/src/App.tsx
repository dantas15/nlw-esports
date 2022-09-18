import { useEffect, useState } from 'react';
import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Game } from './interfaces/Game';
import { api } from './api';
import './styles/main.css';

import logoImg from './assets/logo.svg';

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => {
      const data = await api<Game[]>('/games');
      setGames(data);
    })();
  }, []);

  return (
    <div className="max-w-[1334px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-galaxy-gradient text-transparent bg-clip-text">
          duo
        </span>{' '}
        está aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              title={game.title}
              bannerURL={game.bannerURL}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <CreateAdBanner />
    </div>
  );
}
