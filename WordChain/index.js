const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const WordGraph = require('../WordGraph');
const readFileAsync = promisify(fs.readFile);

const readFile = async (filePath) => 
  readFileAsync(filePath, { encoding: 'utf-8' });

class WordChain {
  constructor(startWord, endWord, filePath) {
    this.graph = [];
    this.words = [];
    this.option = 'file';
    this.startWord = startWord;
    this.endWord = endWord;
    this.filePath = filePath || path.join(__dirname, '..', 'BBDD', 'wordlist.txt');
  }

  getChain() {
    const graph = new WordGraph(this.words);
    return graph.findShortestPath(this.startWord, this.endWord);
  }

  async getWordList() {
    let words = [];
    try {
      if (this.option === 'file') {
        const file = await readFile(this.filePath);
        words = file.split('\n');
      }
      return words;
    } catch (err) {
      throw err;
    }
  }

  async loadWords(startWord = this.startWord, endWord = this.endWord) {
    if (startWord.length !== endWord.length) throw 'Words must be the same length';
    try {
      const words = await this.getWordList();
      if (!words.includes(startWord)) throw 'first word is not included';
      if (!words.includes(endWord)) throw 'second word is not included';
      const wordList = [];
      words.forEach((obj) => {
        if (obj.length === startWord.length) {
          wordList.push(obj.toLowerCase());
        }
      });
      this.words = wordList;
      return wordList;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = WordChain;
