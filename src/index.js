import { Tokenizer } from 'angelicagrass-tokenizer/src/tokenizer.js'
import { regex } from './grammar/sentenceGrammar.js'
import RegularSentence from './regularSentence.js'
import ExclamationSentence from './exclamationSentence.js'
import QuestionSentence from './questionSentence.js'
import Parser from './parser.js'
import PrettyPrinter from './prettyPrinter.js'


const TheTokenizer = new Tokenizer(regex, 'ett ! litet test bara. har jag rätt? eller har jag kommit fel? sista meningen!')
TheTokenizer.setTokenizerRules()
let sentences = TheTokenizer.tokenizeTheString() // array med object resultat

const parser = new Parser(sentences).parse()
const printer = new PrettyPrinter(parser)
printer.colorize()










