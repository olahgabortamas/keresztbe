import test from 'node:test';
import assert from 'node:assert/strict';
import { editions, makePuzzle } from '../src/puzzles.js';

for(const edition of editions){
  test(`${edition.id} is a valid playable Scandinavian grid`,()=>{
    const p=makePuzzle(edition.size,edition.seed,edition.title,edition.subtitle,edition.joke);
    assert.equal(p.letters.length,edition.size**2);
    assert.ok(p.entries.length>=25);
    assert.deepEqual(makePuzzle(edition.size,edition.seed,edition.title,edition.subtitle,edition.joke).letters,p.letters);
    const punchline=p.entries.filter(entry=>entry.kind==='punchline').sort((a,b)=>a.part-b.part);
    assert.equal(punchline.length,edition.joke.segments.length);
    assert.equal(punchline.map(entry=>entry.answer).join(''),edition.joke.answer.toLocaleUpperCase('hu-HU').replace(/[^A-ZÁÉÍÓÖŐÚÜŰ]/g,''));
    const overlaps=new Map();
    for(const entry of p.entries) for(const [offset] of [...entry.answer].entries()){
      const index=(entry.r+(entry.dir===2?offset:0))*p.size+entry.c+(entry.dir===1?offset:0);
      overlaps.set(index,(overlaps.get(index)||0)+1);
    }
    assert.ok([...overlaps.values()].filter(count=>count===2).length>=p.entries.length*.85);
    assert.ok(punchline.every(entry=>[...entry.answer].filter((_,offset)=>overlaps.get(entry.r*p.size+entry.c+offset)===2).length>=Math.max(1,Math.floor(entry.answer.length*.3))));
    for(const entry of p.entries){
      assert.ok([...entry.answer].some((_,offset)=>overlaps.get((entry.r+(entry.dir===2?offset:0))*p.size+entry.c+(entry.dir===1?offset:0))===2));
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
