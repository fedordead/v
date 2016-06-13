import removeClass from './removeClass';

const test = require('tape');

const el = (<div class="hawk face"></div>);

test('removeClass', function (t) {
    // number of tests
    t.plan(2);

    t.equal(el.className, 'hawk face');

    removeClass(el, 'hawk');
    t.equal(el.className, 'face');

});
