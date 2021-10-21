export default class SentenceError extends Error {
  constructor() {
    super()
    this.name = 'SentenceError'
    this.message = 'Invalid sentence!'
  }
}

