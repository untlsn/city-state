import Button from '~/components/atoms/Button';
import letterStore from '~/store/letter';
import alphabetStore, { fullAlphabet } from '~/store/alphabet';
import OutLettersLogic from '~/components/atoms/OutLettersLogic';

export default function Random() {
  return (
    <main className="grid grid-cols-3 pt-20 place-items-center">
      <OutLettersLogic />
      <div className="space-y-8">
        <p>Litery do użycia:</p>
        <ul className="flex gap-4 flex-wrap max-w-100 text-xl">
          {
            fullAlphabet.map((letter) => (
              <Observer key={letter}>
                {() => (
                  <li>
                    <button
                      type="button"
                      className={`rounded-full h-8 w-8 text-center transition-colors ${
                        alphabetStore.letters.includes(letter) ? 'bg-primary-main text-white' : 'bg-gray-100'}`}
                      onClick={() => {
                        if (alphabetStore.letters.includes(letter)) {
                          alphabetStore.remove(letter);
                        } else {
                          alphabetStore.add(letter);
                        }
                      }}
                    >
                      {letter}
                    </button>
                  </li>
                )}
              </Observer>
            ))
          }
        </ul>
      </div>
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
            !letterStore.remainLength
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
          <Observer>
            {() => (
              <>
                {
                  alphabetStore.letters.map((letter) => (
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
              </>
            )}
          </Observer>
        </ul>
      </div>
    </main>
  );
}
