import test from 'node:test';
import assert from 'node:assert/strict';
import { fold, backspaceIndex } from '../src/game-logic.js';

test('English ABC answers match Hungarian accents',()=>{
  assert.equal(fold('KAVE'),fold('KÁVÉ'));
  assert.equal(fold('OROM'),fold('ÖRÖM'));
  assert.equal(fold('TUZ'),fold('TŰZ'));
});

test('Backspace follows the insertion point',()=>{
  const cells=[10,11,12,13];
  assert.equal(backspaceIndex({10:'K',11:'A',12:'V'},cells,13,true),2);
  assert.equal(backspaceIndex({10:'K',11:'A'},cells,12,false),1);
  assert.equal(backspaceIndex({10:'K',11:'A'},cells,11,false),1);
  assert.equal(backspaceIndex({13:'E'},cells,13,false),3);
});
