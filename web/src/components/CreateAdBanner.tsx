import { GameController, MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Form/Input';

export function CreateAdBanner() {
  return (
    <Dialog.Root>
      <div className="mt-8 pt-1 bg-galaxy-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players
            </span>
          </div>
          <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title>Publique um anúncio</Dialog.Title>
          <Dialog.Title className="text-3xl font-black">
            Publique um anúncio
          </Dialog.Title>
          <form className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold ">
                Qual o game?
              </label>
              <Input
                id="game"
                placeholder="Selecione o game que deseja jogar"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input id="name" placeholder="Como te chamam dentro do game" />
            </div>

            <div className="grid grid-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual o seu discord?</label>
                <Input id="discord" placeholder="Usuario#0000" />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">Quando costuma jogar?</label>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    type="button"
                    title="Segunda"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    S
                  </button>
                  <button title="Terça" className="w-8 h-8 rounded bg-zinc-900">
                    T
                  </button>
                  <button
                    type="button"
                    title="Quarta"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    Q
                  </button>
                  <button
                    type="button"
                    title="Quinta"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    Q
                  </button>
                  <button title="Sexta" className="w-8 h-8 rounded bg-zinc-900">
                    S
                  </button>
                  <button
                    type="button"
                    title="Sábado"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    S
                  </button>
                  <button
                    type="button"
                    title="Domingo"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    D
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Em que horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input id="hourStart" type="time" placeholder="De" />
                  <Input id="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-2 text-sm">
              <Input type="checkbox" />
              Costumo me conectar ao chat de voz
            </div>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close
                type="button"
                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
              >
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
              >
                <GameController className="w-6 h-6" />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
