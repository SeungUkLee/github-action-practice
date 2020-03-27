const assert = require('assert');
const { toUpperCase } = require('../src/service/functions');

describe('Github Action Test', () => {
  if('toUpperCase', () => {
    const textText = 'github action test';
    assert.equal(toUpperCase(textText), 'GITHUB ACTION TEST');
  });
});

