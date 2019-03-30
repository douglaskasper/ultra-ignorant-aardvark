# Ultra Ignorant Aardvark

Generates a random, "AdjectiveAdjectiveAnimal"/"gfycat style" combination of words.

Defaults to a nomenclature of AdjectiveAdjectiveAnimal, but includes options to change complexity.

```javascript
const generate = require('ultra-ignorant-aardvark');

// UltraIgnorantHawk
let generatedString = generate();

// Wise pastoral turtle kicks priest!
let generatedString = generate({
    includeRandomAdverbs: true,
    includePredicate: true,
    delimiter: ' ',
    capitalizeFirstWord: true,
    capitalizeAllWords: false,
    includeRandomEndingPunctuation: true
});

// ScandalousMindlessAardvarkMeltsPaper!831
let generatedString = generate({
    includePredicate: true,
    includeRandomEndingPunctuation: true,
    numberOfRandomEndingNumbers: 3
});
```
