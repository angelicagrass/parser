
import RegularSentence from '../sentences/regularSentence.js'
import ExclamationSentence from '../sentences/exclamationSentence.js'
import QuestionSentence from '../sentences/questionSentence.js'

export default class Document {
  constructor(allSentences) {
    this.allSentences = allSentences
    this.choosenSentences = []
  }

  getAllSentences() {
    return this.allSentences
  }

  getExclamationSentences() {
    this.allSentences = this.allSentences.filter(element => element instanceof ExclamationSentence)
  }

  getRegularSentences() {
    this.allSentences = this.allSentences.filter(element => element instanceof RegularSentence)
  }

  getQuestionSentences() {
    this.allSentences = this.allSentences.filter(element => element instanceof QuestionSentence) 
  }
}