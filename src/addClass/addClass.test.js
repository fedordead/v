import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import addClass from './addClass';

describe('addClass', () => {

    jsdom();

    it('should add single class to element', () => {        
        const element = document.createElement('div');
        addClass(element, 'test-class');
        expect(element.className).eql('test-class');
    });

    it('should correctly add two classes to element', () => {        
        const element = document.createElement('div');
        addClass(element, 'test-class');
        addClass(element, 'test-class-2');
        expect(element.className).eql('test-class test-class-2');
    });
});
