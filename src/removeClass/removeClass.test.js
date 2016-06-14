import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import removeClass from './removeClass';

describe('removeClass', () => {

    jsdom();

    it('should remove single class from element', () => {        
        const element = document.createElement('div');
        element.classList.add('test-class');
        removeClass(element, 'test-class');
        expect(element.className).eql('');
    });
});
