const WordChain = require('./');
const path = require('path');

const filePath = path.join(__dirname,'..', 'BBDD','wordlist-test.txt');
const startWord = 'Aaron';
const endWord = 'abate';

describe('WordChain', () => {
  const wordChain = new WordChain(startWord, endWord, filePath);
  it('Has endWord and startWord setted', () => {
    expect(wordChain.startWord).toEqual(startWord);
    expect(wordChain.endWord).toEqual(endWord);
  });

  it('loadWords with the same length', async () => {
    const words = await wordChain.loadWords();
    expect(words).toHaveLength(9);
  });
});