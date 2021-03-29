const expect = require('chai').expect;
const mocks = require('../mocks/fake-site');

const SEOAssistant = require('../lib/index');
const SEOinstance = new SEOAssistant();


describe('SEOAssistant', function () {

    before(function () {
        /**
        * instantiating a page containing title
        */
        mocks.FakeSite.generate.call(mocks.FakeSite);
    })

    //
    // Smoke ~
    //

    describe('## Smoke Test ##', function () {

        it('should exist the `SEOAssistant`', function () {
            expect(SEOinstance).to.exist;
        })
        it('should exist method `title`', function () {
            expect(SEOinstance.title).to.exist;
            expect(SEOinstance.title).to.be.a('function');
        })
        it('should exist method `init`', function () {
            expect(SEOinstance.init).to.exist;
            expect(SEOinstance.init).to.be.a('function');
        })
        it('should exist method `containsKeyword`', function () {
            expect(SEOinstance.containsKeyword).to.exist;
            expect(SEOinstance.containsKeyword).to.be.a('function');
        })
        it('should exist method `characterCounter`', function () {
            expect(SEOinstance.characterCounter).to.exist;
            expect(SEOinstance.characterCounter).to.be.a('function');
        })

    })

    //
    // `containsKeyword`()
    //

    describe('## Method `containsKeyword`', function () {

        context('[Case][Success]', function () {
            it('should return 3 when `containsKeyword(text)`', function () {
                expect(SEOinstance.containsKeyword(mocks.header.description.text)).to.be.equal(3);
            })
        })
        context('[Case][Error]', function () {
            it('should return 0 when `containsKeyword(textWithoutTheKeyword)`', function () {
                expect(SEOinstance.containsKeyword(mocks.header.description.textWithoutTheKeyword)).to.be.equal(0);
            })
        })

    })

    //
    // `characterCounter`()
    //

    describe('## Method `characterCounter`', function () {

        context('[Case][Success]', function () {
            it('should return (number)61 when `characterCounter("O que é Inbound Marketing: conceito, benefícios e estratégias")`', function () {
                expect(SEOinstance.characterCounter(mocks.header.title)).to.be.equal(61);
            })
        })
        context('[Case][Error]', function () {
            it('should return TypeError when parameter type is different from string `characterCounter({})`', function () {
                expect(SEOinstance.characterCounter.bind(SEOinstance, {})).to.throw(TypeError);
            })
            it('should return TypeError when parameter type is different from string `characterCounter(01234)`', function () {
                expect(SEOinstance.characterCounter.bind(SEOinstance, 01234)).to.throw(TypeError);
            })
            it('should return TypeError when parameter type is different from string `characterCounter(undefined)`', function () {
                expect(SEOinstance.characterCounter.bind(SEOinstance, undefined)).to.throw(TypeError);
            })
        })

    })

    //
    // `title`()
    //

    describe('## Method `title`', function () {

        context('[Case][Success]', function () {
            it('should return void when `title()`', function () {

                SEOinstance.title();

                expect(SEOinstance.result.title.shouldExist).to.be.true;
                expect(SEOinstance.result.title.rating).to.be.equal(5);
                expect(SEOinstance.result.title.msg).to.be.string("Title is good, he did not exceed the limits. I\'m not evaluating the quality");
            })
        })

    })
















    // expect(model.get.bind(model, 'z')).to.throw('Property does not exist in model schema.');
    // expect(model.get.bind(model, 'z')).to.throw(new Error('Property does not exist in model schema.'));

    // describe('## Method A', function () {
    //     context('[Case][Error]', function () {
    //         it('should happen alguma coisa[Case_1]', function () {
    //         })
    //     })
    //     context('[Case][Success]', function () {
    //         it('should happen alguma coisa[Case_2]', function () {

    //         })
    //     })
    // })

    // describe('## Method B', function () {
    //     it('should happen outra coisa', function () {

    //     })
    // })

})