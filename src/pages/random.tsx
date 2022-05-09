import { Observer } from 'mobx-react-lite';
import Button from '~/components/atoms/Button';
import letterStore from '~/store/letter';

const alphabet = 'ABCDEFGHIJKLMNOPRSTUWYZ'.split('');

export default function Random() {
  return (
    <main className="grid grid-cols-3 pt-16 place-items-center">
      <div />
      <div className="text-center space-y-2">
        <button
          type="button"
          onClick={() => letterStore.letter && navigator.clipboard.writeText(letterStore.letter)}
          className="block bg-gray-100 rounded text-6xl p-2 w-16 mx-auto cursor-pointer"
        >
          <Observer>
            {() => (
              letterStore.letter
                ? <>{letterStore.letter}</>
                : <span className="text-gray-100">_</span>
            )}
          </Observer>
        </button>
        <Observer>
          {() => (
            !letterStore.remain.size
              ? <Button disabled>Brak liter</Button>
              : <Button onClick={letterStore.randLetter}>Losuj</Button>
          )}
        </Observer>
      </div>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <p>Użyte litery:</p>
          <Button onClick={letterStore.clear}>Wyczyść</Button>
        </div>
        <ul className="flex gap-4 flex-wrap max-w-100 text-xl">
          {
          alphabet.map((letter) => (
            <Observer key={letter}>
              {() => (
                <li
                  className={`rounded-full h-8 w-8 text-center transition-colors ${letterStore.used.has(letter) ? 'bg-primary-main text-white' : 'bg-gray-100'}`}
                >
                  {letter}
                </li>
              )}
            </Observer>
          ))
        }
        </ul>
      </div>
    </main>
  );
}
