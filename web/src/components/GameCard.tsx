import { Game as DefaultGameInterface } from '../interfaces/Game';

interface GameCardProps extends Omit<DefaultGameInterface, 'id' | '_count'> {
  adsCount: number;
}

export function GameCard({ title, bannerURL, adsCount }: GameCardProps) {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden">
      <img src={bannerURL} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{adsCount} anúncios</span>
      </div>
    </a>
  );
}
