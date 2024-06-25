import assert from 'assert';
import { test } from 'node:test';
import { commonPrefix, commonPrefixLength } from './commonPrefix.js'; 

test('commonPrefixLength', () => {
  assert.strictEqual(commonPrefixLength('hello world', 'hello'), 5);
  assert.strictEqual(commonPrefixLength('hello world', 'world'), 0);
  assert.strictEqual(commonPrefixLength('abc', 'abc'), 3);
  assert.strictEqual(commonPrefixLength('abc', 'ab'), 2);
  assert.strictEqual(commonPrefixLength('abc', 'a'), 1);
  assert.strictEqual(commonPrefixLength('abc', ''), 0);
  assert.strictEqual(commonPrefixLength('abc', 'def'), 0);
  assert.strictEqual(commonPrefixLength('abc', 'abcd'), 3);
  assert.strictEqual(commonPrefixLength('abcdef', 'abc'), 3);
  assert.strictEqual(commonPrefixLength('abracadabra', 'abra'), 4);
  assert.strictEqual(commonPrefixLength('abracadabra', 'cadabra'), 0);
  assert.strictEqual(commonPrefixLength('abracadabra', 'abracadabra'), 11);
  assert.strictEqual(commonPrefixLength('abracadabra', 'abrac'), 5);
  assert.strictEqual(commonPrefixLength('abracadabra', 'abracadab'), 9);
  assert.strictEqual(commonPrefixLength('abracadabra', 'ra'), 0);
  assert.strictEqual(commonPrefixLength('abracadabra', 'ab'), 2);
});

test('commonPrefix', () => {
  assert.deepStrictEqual(commonPrefix(['abc']), [3]);
  assert.deepStrictEqual(commonPrefix(['abab']), [6]);
  assert.deepStrictEqual(commonPrefix(['abcdef']), [6]);
  assert.deepStrictEqual(commonPrefix(['abc', 'def']), [3, 3]);
  assert.deepStrictEqual(commonPrefix(['', 'abc']), [0, 3]);
  assert.deepStrictEqual(commonPrefix(['a', 'aa', 'aaa']), [1, 3, 6]);
  assert.deepStrictEqual(commonPrefix(['', '']), [0, 0]);
  assert.deepStrictEqual(commonPrefix(['a', '']), [1, 0]);
  assert.deepStrictEqual(commonPrefix(['', 'a']), [0, 1]);
  assert.deepStrictEqual(commonPrefix(['aaaaa']), [15]);
  assert.deepStrictEqual(commonPrefix(['a', 'aa', 'aaa', 'aaaa']), [1, 3, 6, 10]);
});
