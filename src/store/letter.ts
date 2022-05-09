import getRandomInt from '~/helpers/getRandomInt';
import alphabetStore from '~/store/alphabet';

const createLetterStore = () => {
  const self = {
    letter: '',
    used: new Set<string>(),

    get remain() {
      return alphabetStore.letters.filter((letter) => !self.used.has(letter));
    },
    get remainLength() {
      return alphabetStore.letters.length - self.used.size;
    },

    randLetter() {
      if (self.remainLength == 0) return;
      const randomInt = getRandomInt(0, self.remainLength - 1);
      const newLetter = [...self.remain][randomInt];

      self.changeLetter(newLetter);
    },
    changeLetter(newLetter: string) {
      self.letter = newLetter;
      self.used.add(newLetter);
    },
    clear() {
      self.letter = '';
      self.used = new Set<string>();
    },
  };

  return makeAutoObservable(self);
};

const letterStore = createLetterStore();

export default letterStore;
