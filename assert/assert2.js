const assert = require('assert');

const obj1={
    a:{
        b:1
    }
}

const obj2={
    a:{
        b:1
    }
}

const obj3={
    a:{
        b:1
    }
}

const obj4 =Object.create(obj1);

assert.deepEqual(obj1,obj1," Both object are Equal");
assert.deepEqual(obj1,obj4," Will throw error");
// assert.deepEqual({ a: 1 }, { a: '1' },"test");
// assert.fail(1===1,"passed");
assert.deepEqual(obj1,obj2,"Equal");;
