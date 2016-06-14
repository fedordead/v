import chai from 'chai';
import spies from 'chai-spies';
import jsdom from 'mocha-jsdom';
import addEventToNodes from './addEventToNodes';

describe('addEventToNodes', () => {

    jsdom();
    chai.use(spies);

    it('should add event to single element', () => {        
        const elements = [];
        const spy = chai.spy();

        elements[0] = document.createElement('button');

        addEventToNodes('click', elements, spy);
        elements[0].click();

        chai.expect(spy).to.have.been.called();
    });

    it('should add event to multiple elements', () => {        
        const elements = [];
        const spy = chai.spy();

        elements[0] = document.createElement('button');
        elements[1] = document.createElement('button');

        addEventToNodes('click', elements, spy);
        elements[0].click();
        elements[1].click();

        chai.expect(spy).to.have.been.called.twice();
    });

});
