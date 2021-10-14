export default class ExclamationSentence {
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
