import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import nodeListToArray from './nodeListToArray';

describe('nodeListToArray', () => {

    jsdom();

    it('should convert nodeList to array', () => {        
        document.body.innerHTML = '<p></p><p></p>';
        const arr = nodeListToArray(document.querySelectorAll('p'));

        expect(arr)
            .to.be.instanceof(Array)
            .to.have.lengthOf(2);
    });
});
