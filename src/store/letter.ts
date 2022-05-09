import { makeAutoObservable } from 'mobx';
import getRandomInt from '~/helpers/getRandomInt';

export const alphabet = 'ABCDEFGHIJKLMNOPRSTUWYZ'.split('');

const createLetterStore = () => {
  const self = {
    letter: '',
    used: new Set<string>(),
    remain: new Set(alphabet),

    randLetter() {
      const randomInt = getRandomInt(0, self.remain.size - 1);
      const newLetter = [...self.remain][randomInt];

      self.changeLetter(newLetter);
    },
    changeLetter(newLetter: string) {
      self.letter = newLetter;
      self.remain.delete(newLetter);
      self.used.add(newLetter);
    },
    clear() {
      self.letter = '';
      self.used = new Set<string>();
      self.remain = new Set(alphabet);
    },
  };

  return makeAutoObservable(self);
};

const letterStore = createLetterStore();

export default letterStore;
