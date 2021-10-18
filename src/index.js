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
  console.log(text)
  
}

await read()

// const TheTokenizer = new Tokenizer(regex, text )

const TheTokenizer = new Tokenizer(regex, text )

// TheTokenizer.setTokenizerRules()
let sentences = TheTokenizer.tokenizeTheString() // array med object resultat

const parser = new Parser(sentences).parse()
let document = new Document(parser)
const printer = new PrettyPrinter(document)
printer.colorize()










