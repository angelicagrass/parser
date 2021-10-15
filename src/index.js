import { Tokenizer } from 'angelicagrass-tokenizer/src/tokenizer.js'
import { regex } from './grammar/sentenceGrammar.js'
import RegularSentence from './sentences/regularSentence.js'
import ExclamationSentence from './sentences/exclamationSentence.js'
import QuestionSentence from './sentences/questionSentence.js'
import Parser from './parser/parser.js'
import PrettyPrinter from './prettyPrinter/prettyPrinter.js'
import Document from './document/document.js'


const TheTokenizer = new Tokenizer(regex, 'Här skirver jag lite exmpeltest. Lite frågor? Kanske lite längre meningar bara för att testa hur terminalen hanterar detta sen får det vara bra! En till mening med punkt. Och även en till mening med frågetecken får det bli? Det var väl allt egentligen! Ja det var det! Kanske.')
TheTokenizer.setTokenizerRules()
let sentences = TheTokenizer.tokenizeTheString() // array med object resultat

const parser = new Parser(sentences).parse()

let document = new Document(parser)

const printer = new PrettyPrinter(document)
printer.colorize()










