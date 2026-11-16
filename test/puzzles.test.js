import test from 'node:test';
import assert from 'node:assert/strict';
import { editions, makePuzzle } from '../src/puzzles.js';

for(const edition of editions){
  test(`${edition.id} is a valid playable Scandinavian grid`,()=>{
    const p=makePuzzle(edition.size,edition.seed,edition.title,edition.subtitle);
    assert.equal(p.letters.length,edition.size**2);
    assert.ok(p.entries.length>=25);
    assert.deepEqual(makePuzzle(edition.size,edition.seed).letters,p.letters);
    for(const entry of p.entries){
      const clue=(entry.r-(entry.dir===2?1:0))*p.size+entry.c-(entry.dir===1?1:0);
      assert.ok(p.clues.get(clue)?.includes(entry));
      assert.match(entry.answer,/^[A-ZÁÉÍÓÖŐÚÜŰ]+$/);
      for(const [offset,letter] of [...entry.answer].entries()){
        const row=entry.r+(entry.dir===2?offset:0),col=entry.c+(entry.dir===1?offset:0);
        assert.ok(row>=0&&row<p.size&&col>=0&&col<p.size);
        assert.equal(p.letters[row*p.size+col],letter);
        assert.equal(p.clues.has(row*p.size+col),false);
      }
    }
  });
}
