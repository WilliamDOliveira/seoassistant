const jsdom = require("jsdom");
const { JSDOM } = jsdom;

/**
 * Definition of an enumerator in javascript
 */
const EFakeSite = {
    pageDoesNotContainTitle: 'pageDoesNotContainTitle',
    pageContainsTitle: 'pageContainsTitle'
}
/**
 * transforming into an immutable object
 */
Object.freeze(EFakeSite);


const FakeSite = {
    pageDoesNotContainTitle: ``,
    pageContainsTitle: `<head><title>O que é Inbound Marketing: conceito, benefícios e estratégias</title></head>`,
    page: `<head><title>O que é Inbound Marketing: conceito, benefícios e estratégias</title></head>`,
    generate() {
        this.generatePage('page');
    },
    generatePage: function (property) {
        if (this.hasOwnProperty(property)) {
            const dom = new JSDOM(`<!DOCTYPE html><html>${this[property]}</html>`);
            global.window = dom.window;
            global.document = dom.window.document;
        }
    },
    clearPage: function () {
        global.window = undefined;
        global.document = undefined;
    },
}

const header = {
    title: 'O que é Inbound Marketing: conceito, benefícios e estratégias',
    description: {
        text: `A Title Tag é “O que é Inbound Marketing: conceito, benefícios e estratégias”, 
        mesmo que o título do artigo seja “O que é Inbound Marketing ? Conheça o Marketing de Atração e desenvolva estratégias para atrair
        e conquistar clientes”.`,
        textWithoutTheKeyword: `A Title Tag é “O que é Inbound {keyword}: conceito, benefícios e estratégias”, 
        mesmo que o título do artigo seja “O que é Inbound {keyword} ? Conheça o {keyword} de Atração e desenvolva estratégias para atrair
        e conquistar clientes”.`
    }
}

module.exports = {
    FakeSite,
    EFakeSite,
    header
};