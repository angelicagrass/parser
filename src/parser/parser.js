import RegularSentence from '../sentences/regularSentence.js'
import ExclamationSentence from '../sentences/exclamationSentence.js'
import QuestionSentence from '../sentences/questionSentence.js'

export default class Parser {
  constructor(sentences) {
    this.sentences = sentences
    this.allSentences = []
    this.tempArray = []
    this.index = 0
  }

  parse() {
    this.sentences.forEach(token => {
      if (token.type === 'WORD') {
        this.tempArray.push(token.value[0])
      } else if(token.type === 'DOT') {
        this.createDotSentence(token)
      } else if (token.type === 'EXCLAMATION') {
        this.createExclamationSentence(token)
      } else if (token.type === 'QUESTION') {
        this.createQuestionSentence(token)
    }
  })
    return this.allSentences
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

  createDotSentence(token) {
    this.tempArray.push(token.value[0])
    const sentence = new RegularSentence(this.tempArray, this.index)
    this.pushSentence(sentence)
  }

  createExclamationSentence(token) {
    this.tempArray.push(token.value[0])
    const sentence = new ExclamationSentence(this.tempArray, this.index)
    this.pushSentence(sentence)
  }

  createQuestionSentence(token) {
    this.tempArray.push(token.value[0])
    const sentence = new QuestionSentence(this.tempArray, this.index)
    this.pushSentence(sentence)
  }
  
}

