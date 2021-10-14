import RegularSentence from './regularSentence.js'
import ExclamationSentence from './exclamationSentence.js'
import QuestionSentence from './questionSentence.js'
import Document from './document.js'

export default class Parser {
  constructor(sentences) {
    this.sentences = sentences
    this.allSentences = []
    this.tempArray = []
    this.index = 0
  }

parse() {
  this.sentences.forEach(obj => {
    if (obj.type === 'WORD') {
      this.tempArray.push(obj.value[0])
    } else if(obj.type === 'DOT') {
      this.tempArray.push(obj.value[0])
      const sentence = new RegularSentence(this.tempArray, this.index)
      this.pushSentence(sentence)
    } else if (obj.type === 'EXCLAMATION') {
      this.tempArray.push(obj.value[0])
      const sentence = new ExclamationSentence(this.tempArray, this.index)
      this.pushSentence(sentence)
    } else if (obj.type === 'QUESTION') {
      this.tempArray.push(obj.value[0])
      const sentence = new QuestionSentence(this.tempArray, this.index)
      this.pushSentence(sentence)
  }
})

const document = new Document(this.allSentences)
return document
}

  pushSentence(sentence) {
    sentence.toString()
    this.allSentences.push(sentence)
    this.emptyTempArray()
  }

  emptyTempArray() {
    this.tempArray = []
    this.index++
  }
}
