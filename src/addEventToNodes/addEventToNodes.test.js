import chai from 'chai';
import spies from 'chai-spies';
import jsdom from 'mocha-jsdom';
import addEventToNodes from './addEventToNodes';

describe('addEventToNodes', () => {

    jsdom();
    chai.use(spies);

    it('should add event to single element', () => {        
        const elements = [];
        const evt = () => true;
        const spy = chai.spy(evt);

        // Add elements to array
        elements[0] = document.createElement('button');

        // Attach listener
        addEventToNodes('click', elements, spy);

        // Trigger click
        elements[0].click();

        // Check that function was called
        chai.expect(spy).to.have.been.called();
    });

    it('should add event to multiple elements', () => {        
        const elements = [];
        const evt = () => true;
        const spy = chai.spy(evt);

        // Add elements to array
        elements[0] = document.createElement('button');
        elements[1] = document.createElement('button');

        // Attach listeners
        addEventToNodes('click', elements, spy);

        // Trigger clicks
        elements[0].click();
        elements[1].click();

        // Check that function was called twice
        chai.expect(spy).to.have.been.called.twice();
    });

});
