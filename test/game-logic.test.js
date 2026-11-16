import test from 'node:test';
import assert from 'node:assert/strict';
import { fold, backspaceIndex, timeBonus, comboBonus } from '../src/game-logic.js';

test('consecutive correct words earn a capped combo bonus',()=>{
  assert.deepEqual([1,2,3,6,12].map(comboBonus),[0,10,20,50,50]);
});

test('time bonus falls once per elapsed minute and stops at zero',()=>{
  assert.equal(timeBonus(0,15),300);
  assert.equal(timeBonus(59,15),300);
  assert.equal(timeBonus(60,15),290);
  assert.equal(timeBonus(1800,15),0);
  assert.equal(timeBonus(0,19),450);
  assert.equal(timeBonus(0,23),600);
});

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
