export const fullAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const createAlphabetStore = () => {
  const self = {
    letters: fullAlphabet,
    get out() {
      return fullAlphabet.filter((letter) => !self.letters.includes(letter));
    },

    remove(_letter: string) {
      const letter = _letter.toUpperCase();
      const lettersSet = new Set(self.letters);
      lettersSet.delete(letter);
      self.letters = [...lettersSet];
    },
    add(_letter: string) {
      const letter = _letter.toUpperCase();

      self.letters.push(letter);
      self.letters.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    },
  };

  return makeAutoObservable(self);
};

const alphabetStore = createAlphabetStore();

export default alphabetStore;
