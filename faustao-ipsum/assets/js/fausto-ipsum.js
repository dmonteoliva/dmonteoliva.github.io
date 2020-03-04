import { mainQuote, quotes } from './fausto-quotes.js'

export class FaustoIpsum {

    static createText(options) {
        this.defaults = {
            phrasesOnParagraph: 7,
            paragraphsQuantity: 1,
        };

        this.options = Object.assign({}, this.defaults, options);

        let quotesTemp = quotes.slice();

        let result = `<p>${mainQuote} `;

        for (let i = 0; i < this.options.paragraphsQuantity; i++) {
            if (i > 0)
                result += "<p>"
            for (let j = 0; j < this.options.phrasesOnParagraph; j++) {
                if (quotesTemp.length == 0)
                    quotesTemp = quotes.slice();
                let randomNumber = this.getRandomNumber(quotesTemp.length);
                result += `${quotesTemp[randomNumber]} `;
                quotesTemp.splice(randomNumber, 1);
            }

            if (i != this.options.paragraphsQuantity - 1)
                result += "</p>";
        }
        return result;
    };

    static getRandomNumber(max) {
        return Math.ceil(Math.random() * (max - 1));
    };
}