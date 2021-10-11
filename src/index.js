import { Tokenizer } from 'angelicagrass-tokenizer/src/tokenizer.js'
import { regex } from './grammar/sentenceGrammar.js'


const TheTokenizer = new Tokenizer(regex, 'ett ! litet test bara.')



TheTokenizer.setTokenizerRules()
let the = TheTokenizer.tokenizeTheString() // array med object resultat
TheTokenizer.getPreviousToken()

console.log(the)

// komma åt inuti objekten
the.map(obj => {
  if (obj.type === 'WORD')  console.log(obj.type)
})
