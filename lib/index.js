'use strict';

const SEOAssistant = function (keyword) {
    // Definir atributos aqui
    this.keyword = keyword ? keyword : 'Marketing';

    // definition of attributes
    this.result = {
        title: {
            shouldExist: false,
            rating: 0,
            msg: ''
        },
        description: {
            shouldExist: false,
            rating: 0,
            msg: ''
        }
    }
}

/**
 * characterCounter
 * 
 * Returns a number equivalent to the number of characters
 * 
 * @param {string} context 
 * @returns number
 */
SEOAssistant.prototype.characterCounter = function (context) {
    // validates the parameter
    if (typeof context !== 'string')
        throw new TypeError("{String} Use the correct type as a parameter");

    return String(context).length;
}

/**
 * containsKeyword
 * 
 * Returns a number, corresponding to the number of times the keyword was found in the context
 * 
 * @param {string} context
 * @return number
 */
SEOAssistant.prototype.containsKeyword = function (context) {
    const regex = new RegExp(this.keyword, 'gi');
    // Returns an array containing the word repeatedly
    const res = context.match(regex);
    return res ? res.length : 0;
}
/**
 * Title
 * 
 * Analyze the page title
 * 
 * @return void
 */
SEOAssistant.prototype.title = function () {

    const title = document.title;

    if (!title)
        this.result.title = { shouldExist: false, rating: 0, msg: "Title not found" };
    else {
        if (this.containsKeyword(title) > 0)
            this.result.title.shouldExist = true;

        this.result.title = (this.characterCounter(title) <= 65)
            ? Object.assign(this.result.title, { rating: 5, msg: "Title is good, he did not exceed the limits. I'm not evaluating the quality" })
            : Object.assign(this.result.title, { rating: 2, msg: "Title is bad, pieces of it will not be displayed" })
    }
}

/**
 * init
 * 
 * Launch the application,
 * Using *Template Method* to validate the steps of the algorithm
 * 
 * @return void
 */
SEOAssistant.prototype.init = function () {
    console.log("Seo assistant, Ready !!!");
    this.title();
}

module.exports = SEOAssistant;
