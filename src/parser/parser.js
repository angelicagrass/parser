import RegularSentence from '../sentences/regularSentence.js'
import ExclamationSentence from '../sentences/exclamationSentence.js'
import QuestionSentence from '../sentences/questionSentence.js'
import Document from '../document/document.js'
import SentenceError from '../errors/sentenceError.js'

export default class Parser {
  constructor(sentences) {
    this.sentences = sentences
    this.allSentences = []
    this.tempArray = []
    this.index = 0

  }

  parse() {
  this.sentences.forEach(token => {
      if (token.type === 'WORD') { this.tempArray.push(token.value[0]) } 
      else if (token.type === 'DOT' || token.type === 'EXCLAMATION' || token.type === 'QUESTION') { this.createSentence(token) }
      else throw new SentenceError()
    })
    
    return this.allSentences
  }

  createSentence(token) {
    this.tempArray.push(token.value[0])
    let sentence = ''

    if (token.type === 'DOT') sentence = new RegularSentence(this.tempArray, this.index)
    else if (token.type === 'EXCLAMATION') sentence = new ExclamationSentence(this.tempArray, this.index)
    else if (token.type === 'QUESTION') sentence = new QuestionSentence(this.tempArray, this.index)
    else throw new SentenceError()

    this.pushSentence(sentence)
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


