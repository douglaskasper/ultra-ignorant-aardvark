const words = require('./words');

module.exports = function ({
    numberOfAdjectives = 2,
    includeRandomAdverbs = false,
    useAnimalForSubject = true,
    includePredicate = false,
    useAnimalForPredicateObject = false,
    delimiter = '',
    capitalizeFirstWord = true,
    capitalizeAllWords = true,
    includeRandomEndingPunctuation = false,
    numberOfRandomEndingNumbers = 0
    } = {})
{
    let wordList = [];
    
    wordList = wordList.concat(words.getAdjectiveList(numberOfAdjectives, includeRandomAdverbs));
    
    wordList.push(useAnimalForSubject ?  words.getAnimal() : words.getNoun());

    if (includePredicate) {
        wordList.push(words.getVerb() + 's', useAnimalForPredicateObject ? words.getAnimal() : words.getNoun());
    };

    if (capitalizeAllWords) { wordList = wordList.map(word => word.charAt(0).toUpperCase() + word.slice(1)); }
    if (wordList.length > 1 && capitalizeFirstWord) { wordList[0] = wordList[0].charAt(0).toUpperCase() + wordList[0].slice(1); }

    return wordList
        .join(delimiter)
        .concat(includeRandomEndingPunctuation ? words.getPunctuation() : '')
        .concat(numberOfRandomEndingNumbers > 0 ? words.getNumberList(numberOfRandomEndingNumbers).join('') : '');

    // return new Promise(function(resolve, reject) {
    //     resolve(
    //         words.getAdjectiveList(numberOfAdjectives, includeRandomAdverbs)
    //             .concat(useAnimalForSubject ?  words.getAnimal() : words.getNoun())
    //             .concat(includePredicate ? words.getVerb() + 's': '')
    //             .concat(includePredicate ? (useAnimalForPredicateObject ? words.getAnimal() : words.getNoun()) : '')
    //             .map(word => capitalizeAllWords ? word.charAt(0).toUpperCase() + word.slice(1): word)
    //             .join(delimiter)
    //             .concat(includeRandomEndingPunctuation ? words.getPunctuation() : '')
    //             .concat(numberOfRandomEndingNumbers > 0 ? words.getNumberList(numberOfRandomEndingNumbers).join('') : '')
    //     );
    // })
}
