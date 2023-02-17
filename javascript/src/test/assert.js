"use strict";

// assertions -> verifying invariants

import assert from 'node:assert/strict'; 
// const assert = require('node:assert/strict');

const first = [[[1, 2, 3]], 4, 5];
const second = [[[1, 2, '3']], 4, 5];

console.log(first === second);

const { message } = {
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
}

try {
    assert.deepEqual(first, second)
}
catch (err)
{
    assert(err instanceof assert.AssertionError);
}


// comparation with objects

const obj1 = {
    a: {
        b: 1,
    }
}

const obj2 = {
    a: {
        b: 2,
    }
}

assert.strictEqual(obj1,obj1)
assert.notDeepEqual(obj1, obj2);
assert.strictEqual(obj1, obj2); //err
