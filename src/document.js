import QuestionSentence from "./questionSentence.js"

export default class Document {
  constructor(allSentences) {
    this.allSentences = allSentences

  }

  getAllSentences() {
    return this.allSentences
  }

  getExclamationSentences() {}

  getRegularSentences() {}

  getQuestionSentences() {}

}