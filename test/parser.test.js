import { Tokenizer } from 'angelicagrass-tokenizer/src/tokenizer.js'
import { regex } from '../src/grammar/sentenceGrammar.js'
import Parser from '../src/parser/parser.js'
import PrettyPrinter from '../src/prettyPrinter/prettyPrinter.js'
import Document from '../src/document/document.js'
import RegularSentence from '../src/sentences/regularSentence.js'
import ExclamationSentence from '../src/sentences/exclamationSentence.js'
import QuestionSentence from '../src/sentences/questionSentence.js'




describe('Tests for parser', () => {

  it('TC1 - Test parser string length', () => {
    const text = 'Hello! Little? Friend.'
    const TheTokenizer = new Tokenizer(regex, text )
    const sentences = TheTokenizer.tokenizeTheString()
    const parser = new Parser(sentences).parse()
    const document = new Document(parser)
    expect(document.allSentences.length).toEqual(3)
  })

  it('TC2 - Test to get all questionsentences', () => {
    const text = 'Hello! Little? Friend?'
    const TheTokenizer = new Tokenizer(regex, text )
    const sentences = TheTokenizer.tokenizeTheString()
    const parser = new Parser(sentences).parse()
    let document = new Document(parser)
    document.getQuestionSentences()
    expect(document.allSentences.length).toEqual(2)
  })


  it('TC3 - Test to get all exclamationsentences', () => {
    const text = 'Hello! Little? Friend?'
    const TheTokenizer = new Tokenizer(regex, text )
    const sentences = TheTokenizer.tokenizeTheString()
    const parser = new Parser(sentences).parse()
    let document = new Document(parser)
    document.getExclamationSentences()
    expect(document.allSentences.length).toEqual(1)
  })


  it('TC4 - Test to get all regularsentences', () => {
    const text = 'Hello! Little? Friend. Here we are again.'
    const TheTokenizer = new Tokenizer(regex, text )
    const sentences = TheTokenizer.tokenizeTheString()
    const parser = new Parser(sentences).parse()
    let document = new Document(parser)
    document.getRegularSentences()
    expect(document.allSentences.length).toEqual(2)
  })

  it('TC5 - Test instance of regularSentence', () => {
    const text = 'Here we are again. And again.'
    const TheTokenizer = new Tokenizer(regex, text )
    const sentences = TheTokenizer.tokenizeTheString()
    const parser = new Parser(sentences).parse()
    let document = new Document(parser)
    document.getRegularSentences()
    document.allSentences.forEach(sentence => {
      expect(sentence instanceof RegularSentence).toEqual(true)
    })
  })

  it('TC6 - Test instance of exclamationsentence', () => {
    const text = 'Here we are again! And again!'
    const TheTokenizer = new Tokenizer(regex, text )
    const sentences = TheTokenizer.tokenizeTheString()
    const parser = new Parser(sentences).parse()
    let document = new Document(parser)
    document.getExclamationSentences()
    document.allSentences.forEach(sentence => {
      expect(sentence instanceof ExclamationSentence).toEqual(true)
    })
  })


  it('TC7 - Test instance of questionsentence', () => {
    const text = 'Here we are again? And again?'
    const TheTokenizer = new Tokenizer(regex, text )
    const sentences = TheTokenizer.tokenizeTheString()
    const parser = new Parser(sentences).parse()
    let document = new Document(parser)
    document.getQuestionSentences()
    document.allSentences.forEach(sentence => {
      expect(sentence instanceof QuestionSentence).toEqual(true)
    })
  })
})
