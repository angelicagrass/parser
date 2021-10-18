export default class Sentence  {
  constructor(words, index) {
    this.words = words
    this.sentence = ''
    this.index = `index ${index}: `
  }

  toString() {
    this.words.forEach(element => {
      this.sentence += element + ' '
    })
  }
  
}
