const adjectives = require('./word-lists/adjectives'),
    adverbs = require('./word-lists/adverbs'),
    animals = require('./word-lists/animals'),
    nouns = require('./word-lists/nouns'),
    verbs = require('./word-lists/verbs');

function getAdjective() {
    return getRandomArrayEntry(adjectives);
}

function getAdjectiveList(numberOfAdjectives = 1, includeRandomAdverbs = false) {
    let adjectiveList = [];
    for (let i = 0; i < numberOfAdjectives; i++) {
        if (includeRandomAdverbs) {
            if (Math.random() >= 0.5) { adjectiveList.push(getAdverb()); }
        }
        adjectiveList.push(getAdjective());
    }
    return adjectiveList;
}

function getAdverb() {
    return getRandomArrayEntry(adverbs);
}

function getAnimal() {
    return getRandomArrayEntry(animals);
}

function getNoun() {
    return getRandomArrayEntry(nouns);
}

function getNumber() {
    return Math.floor((Math.random() * 9) + 1);
}

function getNumberList(numberOfNumbers = 1) {
    let numberList = [];
    for (let i = 0; i < numberOfNumbers; i++) {
        numberList.push(getNumber());
    }
    return numberList;
}

function getPunctuation() {
    punctuation = ['.', '!', '?'];
    return getRandomArrayEntry(punctuation);
}

function getRandomArrayEntry(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getVerb() {
    return getRandomArrayEntry(verbs);
}

module.exports = {
    getAdjectiveList: getAdjectiveList,
    getAdverb: getAdverb,
    getAnimal: getAnimal,
    getNoun: getNoun,
    getNumberList: getNumberList,
    getPunctuation: getPunctuation,
    getVerb: getVerb,
};