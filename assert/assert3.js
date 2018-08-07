const assert = require('assert');


// assert.fail(actual, expected[, message[, operator[, stackStartFunction]]])


// assert.fail("test fail without parameter");

// assert.fail('a','b');

// assert.fail(1,2,"1==2","<");

// assert.fail(1, 2, undefined, '>');

function suppressFrame() {
    assert.fail('a', 'b', undefined, '!==', suppressFrame);
}
suppressFrame();