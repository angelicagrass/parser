
import RegularSentence from './regularSentence.js'
import ExclamationSentence from './exclamationSentence.js'
import QuestionSentence from './questionSentence.js'

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

    // console.log(this.allSentences + 'här är exclam')
    // this.allSentences.forEach(element => {
    //   console.log(element + 'här är element')
    //   // this.allSentences.filter(element instanceof ExclamationSentence)
    //   // return this.allSentences 
    // })
    // // return this.choosenSentences
    // // this.allSentences.filter(element instanceof ExclamationSentence)
    // return this.allSentences
  }

  getRegularSentences() {
    this.allSentences = this.allSentences.filter(element => element instanceof RegularSentence)
  }

  getQuestionSentences() {
    this.allSentences = this.allSentences.filter(element => element instanceof QuestionSentence) 
  }
}