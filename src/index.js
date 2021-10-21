import { Tokenizer } from 'angelicagrass-tokenizer/src/tokenizer.js'
import { regex } from './grammar/sentenceGrammar.js'
import Parser from './parser/parser.js'
import PrettyPrinter from './prettyPrinter/prettyPrinter.js'
import Document from './document/document.js'
import Readline from './reader/readline.js'

let text = ''

async function read() {
  const reader = new Readline()
  text = await reader.getText()  
}

await read()

const TheTokenizer = new Tokenizer(regex, text )
const sentences = TheTokenizer.tokenizeTheString() // array med object resultat
const parser = new Parser(sentences).parse()
const document = new Document(parser)
document.getQuestionSentences()
console.log(document)
const printer = new PrettyPrinter(document)
printer.colorize()











