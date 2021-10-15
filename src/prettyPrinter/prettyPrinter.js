import { color } from './colors.js'
import RegularSentence from '../sentences/regularSentence.js'
import ExclamationSentence from '../sentences/exclamationSentence.js'
import QuestionSentence from '../sentences/questionSentence.js'

export default class PrettyPrinter {
  constructor(sentences) {
    this.sentences = sentences 
  }

  colorize(){
    this.sentences.allSentences.forEach(element => {
      if (element instanceof ExclamationSentence) {
        console.log(color.BgMagenta, element.index + element.sentence)  
      } else if (element instanceof RegularSentence) {
        console.log(color.BgGreen, element.index + element.sentence)
      } else if (element instanceof QuestionSentence) {
        console.log(color.BgCyan, element.index + element.sentence)
      }
    })
  }
}
