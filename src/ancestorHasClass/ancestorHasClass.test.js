import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import ancestorHasClass from './ancestorHasClass';

describe('ancestorHasClass', () => {

    jsdom();

    const tree = `
    <div class="test-class-2">
        <div id="target" class="test-class">
            <div id="target"></div>
        </div>
    <div>
    `;

    it('should find class on parent', () => {
        const element = document.createElement('div');
        element.innerHTML = tree;
        const el = element.getElementById('target');
        expect(ancestorHasClass(el, 'test-class')).to.be.true;
    });

});
