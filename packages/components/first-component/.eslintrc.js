const root = require('../../.eslintrc.js');
const spellcheckConfig = Object.assign(root.rules['spellcheck/spell-checker']);
spellcheckConfig[1].skipWords.push(
    //Add package-specific words to spellcheck here.
);

const config = {
    extends: '../../.eslintrc.js',
    rules: {
        'spellcheck/spell-checker': spellcheckConfig
    }
};

module.exports = config;