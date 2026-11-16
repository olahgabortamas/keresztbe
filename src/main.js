import { editions, makePuzzle } from './puzzles.js?v=6';
import { fold, backspaceIndex } from './game-logic.js?v=6';

const $=s=>document.querySelector(s);
const key=(id)=>`keresztbe:v3:${id}`;
const clean=s=>(s||'').toLocaleUpperCase('hu-HU').replace(/[^A-ZÁÉÍÓÖŐÚÜŰ]/g,'');
const puzzles=new Map(editions.map(e=>[e.id,makePuzzle(e.size,e.seed,e.title,e.subtitle,e.joke)]));
const app=$('#app');
let currentId=localStorage.getItem('keresztbe:last')||editions[0].id;
if(!puzzles.has(currentId))currentId=editions[0].id;
let puzzle, state, selected=0, activeCell=-1, showingMenu=false, toastTimer, lastTyped=false, zoomed=false;

function fresh(){return {values:{},solved:[],attempted:[],hinted:[],wrongChecks:{},wrongPunchline:'',punchlineSolved:false,score:0,mistakes:0,hints:0,seconds:0,completed:false};}
function load(id){try{return {...fresh(),...JSON.parse(localStorage.getItem(key(id))||'{}')};}catch{return fresh();}}
function save(){localStorage.setItem(key(currentId),JSON.stringify(state));}
function entryCells(e){return [...e.answer].map((_,i)=>(e.r+(e.dir===2?i:0))*puzzle.size+e.c+(e.dir===1?i:0));}
function entriesAt(i){return puzzle.entries.filter(e=>entryCells(e).includes(i));}
function clueIndex(e){return (e.r-(e.dir===2?1:0))*puzzle.size+e.c-(e.dir===1?1:0);}
function normalEntries(){return puzzle.entries.filter(e=>e.kind!=='punchline');}
function phraseEntries(){return puzzle.entries.filter(e=>e.kind==='punchline').sort((a,b)=>a.part-b.part);}
function phraseCells(){return phraseEntries().flatMap(entryCells);}
function isSolvedEntry(e){return e.kind==='punchline'?state.punchlineSolved:state.solved.includes(e.id);}
function allSolved(){return state.solved.length===normalEntries().length&&state.punchlineSolved;}
function timeText(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
function icon(name){return {spark:'✦',clock:'◷',check:'✓',hint:'✧',arrow:'↗',trophy:'◆'}[name]||name;}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2600);}

function renderShell(){
  app.innerHTML=`<header class="topbar"><a class="brand" href="#" aria-label="Keresztbe kezdőlap"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>Keresztbe<span class="brand-dot">.</span></span></a><nav><span class="nav-caption">Egy kis fejtörő, sok jó pillanat.</span><button id="puzzleMenu" class="nav-button" type="button">Rejtvények <span>⌄</span></button></nav></header>
  <main><section class="intro"><div class="eyebrow"><span class="eyebrow-line"></span> A NAP KIS SZÜNETE</div><h1>Gondolkodj <em>keresztbe.</em></h1><p>Skandináv keresztrejtvények magyarul, pont úgy, ahogy az újságból szereted — egy kis mai varázzsal.</p><div class="intro-deco" aria-hidden="true"><span>✳</span><span>✳</span><span>✳</span></div></section>
  <section id="chooser" class="chooser" aria-label="Rejtvény választása"></section>
  <section class="game-shell"><div class="game-main"><div class="game-heading"><div><div class="kicker">A MAI REJTVÉNY</div><h2 id="puzzleTitle"></h2><p id="puzzleSubtitle"></p></div><div class="edition-stamp">K <span>✳</span></div></div><div id="jokeLead" class="joke-lead"></div><div class="game-toolbar"><div class="stat"><span class="stat-icon">◷</span><strong id="timer">00:00</strong><small>eltelt idő</small></div><div class="stat"><span class="stat-icon">✦</span><strong id="score">0</strong><small>pont</small></div><div class="stat progress-stat"><span class="stat-icon">▦</span><strong id="progress">0 / 0</strong><small>megfejtett szó</small></div><button id="zoomButton" class="zoom-button" type="button" aria-pressed="false">Nagyítás <span>＋</span></button><button id="helpButton" class="help-button" type="button" title="Játékszabályok">?</button></div>
  <div id="mobileClue" class="mobile-clue" aria-live="polite"></div><div class="board-frame"><div id="board" class="board" role="grid" aria-label="Skandináv keresztrejtvény"></div></div><div class="board-foot"><span><span class="live-dot"></span> A haladásodat automatikusan mentjük</span><span id="boardSize"></span></div></div>
  <aside class="sidebar"><div class="aside-heading"><span class="aside-star">✳</span><span>FEJTŐSAROK</span></div><div class="joke-card" id="jokeCard"><div class="joke-card-top"><span>AZ ELKEZDETT VICC</span><span>+300 PONT</span></div><p id="jokeSetup"></p><div class="phrase-label">A POÉN A KIEMELT FŐSOROKBAN</div><div id="phrasePreview" class="phrase-preview"></div><button id="punchlineButton" class="punchline-button" type="button">Poén ellenőrzése <span>↗</span></button></div><div class="clue-card"><div class="clue-label">AKTUÁLIS MEGHATÁROZÁS <span id="direction"></span></div><p id="activeClue"></p><div class="answer-length" id="answerLength"></div></div><div class="action-row"><button id="checkButton" class="primary-action" type="button"><span>✓</span> Szó ellenőrzése</button><button id="hintButton" class="secondary-action" type="button"><span>✧</span> Egy betű súgás</button><button id="checkAllButton" class="all-action" type="button"><span>▦</span> Összes szó ellenőrzése</button></div><div class="score-card"><div class="score-ornament">✦</div><div class="score-title">Gyűjts pontokat!</div><p>Jó szó <strong>+100</strong> · elsőre <strong>+25</strong><br>Poén <strong>+300</strong> · súgás <strong>−30</strong></p></div><div class="keyboard-hint">⌨ &nbsp; Billentyűzettel is játszható</div><button id="resetButton" class="reset-button" type="button">Rejtvény újrakezdése ↺</button></aside></section>
  <section class="bottom-note"><span>✳</span><div><strong>Csak még egy szó…</strong><p>A legjobb ötletek néha egy kis szünet után jönnek.</p></div></section></main>
  <footer><span>Keresztbe<span class="brand-dot">.</span></span><span>Magyar szavak. Jó pillanatok.</span><span>2026</span></footer><div id="toast" class="toast" role="status"></div><input id="mobileInput" class="mobile-input" type="text" inputmode="text" autocomplete="off" autocapitalize="characters" aria-label="Betű beírása" /><dialog id="helpDialog"><form method="dialog"><button class="close" aria-label="Bezárás">×</button><div class="dialog-symbol">✳</div><h2>Hogyan játssz?</h2><p>A zöld mezőkben vannak a meghatározások. A nyíl mutatja a válasz irányát. A rézszínű fősorokban rejtőzik a vicc poénja; a keresztező szavak segítenek kitalálni. Az ékezet nélküli betűket is elfogadjuk.</p><p>Az <strong>Összes szó ellenőrzése</strong> az összes kitöltött szót vizsgálja. A poént külön ellenőrizd: <strong>300 bónuszpont</strong> jár érte. A haladás ezen az eszközön marad meg.</p><button class="dialog-ok">Értem, jöhet!</button></form></dialog>`;
  $('#helpButton').onclick=()=>$('#helpDialog').showModal();
  $('#zoomButton').onclick=()=>{zoomed=!zoomed;fitBoard();};
  $('#checkButton').onclick=checkWord;$('#hintButton').onclick=hint;$('#checkAllButton').onclick=checkAllWords;$('#punchlineButton').onclick=checkPunchline;
  $('#resetButton').onclick=()=>{if(confirm('Újrakezded ezt a rejtvényt? A mentett betűk és pontok törlődnek.')){state=fresh();save();renderGame();toast('A rejtvény újraindult.');}};
  $('#puzzleMenu').onclick=()=>{showingMenu=!showingMenu;$('#chooser').classList.toggle('open',showingMenu);$('#chooser').scrollIntoView({behavior:'smooth',block:'nearest'});};
  $('.brand').onclick=e=>{e.preventDefault();scrollTo({top:0,behavior:'smooth'});};
  $('#mobileInput').addEventListener('input',e=>{const chars=clean(e.target.value);if(chars)for(const ch of chars)inputLetter(ch);e.target.value='';});
  renderChooser();renderGame();
  window.addEventListener('resize',fitBoard);
}

function renderChooser(){
  $('#chooser').innerHTML=`<div class="chooser-title"><span>VÁLASSZ REJTVÉNYT</span><span>01 — 03</span></div><div class="edition-list">${editions.map((e,i)=>{const p=puzzles.get(e.id),s=load(e.id),done=s.solved.length,total=p.entries.filter(word=>word.kind!=='punchline').length;return `<button class="edition ${e.id===currentId?'selected':''}" data-id="${e.id}" type="button"><span class="edition-num">0${i+1}</span><span class="edition-copy"><strong>${e.title}</strong><small>${e.subtitle}</small></span><span class="edition-info"><b>${e.size} × ${e.size}</b><small>${done} / ${total} szó</small></span><span class="edition-arrow">↗</span></button>`}).join('')}</div>`;
  $('#chooser').querySelectorAll('.edition').forEach(b=>b.onclick=()=>{currentId=b.dataset.id;localStorage.setItem('keresztbe:last',currentId);showingMenu=false;$('#chooser').classList.remove('open');renderChooser();renderGame();$('.game-shell').scrollIntoView({behavior:'smooth',block:'start'});});
}

function renderGame(){
  puzzle=puzzles.get(currentId);state=load(currentId);selected=normalEntries()[0].id;lastTyped=false;activeCell=entryCells(puzzle.entries[selected])[0];
  $('#puzzleTitle').textContent=puzzle.title;$('#puzzleSubtitle').textContent=puzzle.subtitle;$('#boardSize').textContent=`${puzzle.size} × ${puzzle.size} mező`;
  $('#jokeSetup').textContent=puzzle.joke.setup;$('#jokeLead').innerHTML=`<span>✦ A VIC<strong>C</strong> KEZDETE</span><p>${puzzle.joke.setup}</p>`;
  const board=$('#board');board.style.setProperty('--size',puzzle.size);board.innerHTML='';
  const mainCells=new Set(phraseCells());
  for(let i=0;i<puzzle.letters.length;i++){
    const cell=document.createElement('button');cell.type='button';cell.dataset.i=i;
    const cl=puzzle.clues.get(i);
    if(cl){cell.className='cell clue-cell'+(cl.some(e=>e.kind==='punchline')?' punchline-clue':'');cell.setAttribute('aria-label',cl.map(e=>`${e.clue}, ${e.dir===1?'jobbra':'lefelé'}`).join('; '));cell.innerHTML=cl.map(e=>`<span class="clue-part ${e.dir===1?'right':'down'}" data-entry="${e.id}"><span class="clue-text">${e.clue}</span><span class="clue-arrow">${e.dir===1?'→':'↓'}</span></span>`).join('');cell.onclick=ev=>{lastTyped=false;const part=ev.target.closest('[data-entry]');selectEntry(part?Number(part.dataset.entry):cl[0].id);focusInput();};}
    else if(puzzle.letters[i]){cell.className='cell letter-cell'+(mainCells.has(i)?' punchline-cell':'');cell.setAttribute('aria-label',`Betűmező ${Math.floor(i/puzzle.size)+1}. sor, ${i%puzzle.size+1}. oszlop${mainCells.has(i)?', a poén része':''}`);cell.onclick=()=>{lastTyped=false;const es=entriesAt(i);const next=es.find(e=>e.id!==selected)||es[0];selectEntry(next.id,i);focusInput();};}
    else {cell.className='cell void-cell';cell.disabled=true;cell.tabIndex=-1;}
    board.append(cell);
  }
  selectEntry(selected,activeCell);refresh();requestAnimationFrame(fitBoard);
}

function fitBoard(){if(!puzzle)return;const frame=$('.board-frame'),board=$('#board'),size=puzzle.size;
  const availableWidth=frame.clientWidth-24;
  const availableHeight=Math.max(190,window.innerHeight-frame.getBoundingClientRect().top-28);
  const fitted=Math.max(10,Math.floor(Math.min((availableWidth-size*2-4)/size,(availableHeight-size*2-4)/size)));
  board.style.setProperty('--cell',`${zoomed?Math.max(fitted,window.innerWidth<780?34:42):fitted}px`);
  frame.classList.toggle('zoomed',zoomed);
  $('#zoomButton').innerHTML=zoomed?'Teljes rács <span>−</span>':'Nagyítás <span>＋</span>';
  $('#zoomButton').setAttribute('aria-pressed',String(zoomed));
}

function selectEntry(id,cell){selected=id;const e=puzzle.entries[id];if(!e)return;activeCell=cell??entryCells(e).find(i=>!state.values[i])??entryCells(e)[0];
  $('#activeClue').textContent=e.clue;$('#direction').textContent=e.dir===1?'→ JOBBRA':'↓ LEFELÉ';$('#answerLength').textContent=`${e.answer.length} BETŰ`;
  $('#mobileClue').innerHTML=`<span>${e.dir===1?'→':'↓'} ${e.answer.length} BETŰ</span><strong>${e.clue}</strong>`;
  const cells=new Set(entryCells(e));for(const node of $('#board').children){const i=Number(node.dataset.i);node.classList.toggle('active-word',cells.has(i));node.classList.toggle('active-cell',i===activeCell);node.classList.toggle('active-clue',i===clueIndex(e));}
}
function refresh(){
  for(const node of $('#board').children){const i=Number(node.dataset.i);if(!puzzle.letters[i])continue;node.textContent=state.values[i]||'';node.classList.toggle('filled',!!state.values[i]);node.classList.toggle('solved',entriesAt(i).some(isSolvedEntry));}
  $('#score').textContent=state.score.toLocaleString('hu-HU');$('#timer').textContent=timeText(state.seconds);$('#progress').textContent=`${state.solved.length} / ${normalEntries().length}`;
  renderPunchline();
  renderChooser();
}
function renderPunchline(){
  $('#phrasePreview').innerHTML=phraseEntries().map((entry,index)=>{
    let letter=0;const letters=[...puzzle.joke.segments[index]].map(char=>char===' '?'<span class="phrase-gap"></span>':`<span class="phrase-tile">${state.values[entryCells(entry)[letter++]]||'·'}</span>`).join('');
    return `<div class="phrase-row"><b>0${index+1}</b>${letters}</div>`;
  }).join('');
  $('#jokeCard').classList.toggle('complete',state.punchlineSolved);
  $('#punchlineButton').disabled=state.punchlineSolved;
  $('#punchlineButton').innerHTML=state.punchlineSolved?'Poén megfejtve ✓':'Poén ellenőrzése <span>↗</span>';
}
function focusInput(){if(matchMedia('(pointer:coarse)').matches)$('#mobileInput').focus();}
function inputLetter(ch){if(state.completed)return;const e=puzzle.entries[selected], cells=entryCells(e);if(!cells.includes(activeCell))activeCell=cells[0];
  if(entriesAt(activeCell).some(isSolvedEntry)){if(fold(ch)!==fold(puzzle.letters[activeCell])){toast('Ez a betű már megfejtett szóhoz tartozik.');return;}}
  else state.values[activeCell]=ch;
  const pos=cells.indexOf(activeCell);lastTyped=pos<cells.length-1;if(lastTyped)activeCell=cells[pos+1];save();refresh();selectEntry(selected,activeCell);}
function eraseLetter(){if(state.completed)return;const cells=entryCells(puzzle.entries[selected]);const pos=backspaceIndex(state.values,cells,activeCell,lastTyped);
  const target=cells[pos];lastTyped=false;
  if(entriesAt(target).some(isSolvedEntry)){toast('Ez a betű már megfejtett szóhoz tartozik.');return;}
  delete state.values[target];activeCell=target;save();refresh();selectEntry(selected,target);
}
function move(delta){lastTyped=false;const cells=entryCells(puzzle.entries[selected]),p=cells.indexOf(activeCell);selectEntry(selected,cells[Math.max(0,Math.min(cells.length-1,p+delta))]);}
function inspectWord(entry){
  const cells=entryCells(entry),given=cells.map(i=>state.values[i]||'').join('');
  if(given.length<entry.answer.length)return {status:'incomplete',points:0};
  if(fold(given)===fold(entry.answer)){
    const bonus=!state.attempted.includes(entry.id)&&!state.hinted.includes(entry.id);
    state.solved.push(entry.id);cells.forEach(i=>state.values[i]=puzzle.letters[i]);
    const points=bonus?125:100;state.score+=points;return {status:'correct',points};
  }
  if(state.wrongChecks[entry.id]!==fold(given)){state.wrongChecks[entry.id]=fold(given);state.score=Math.max(0,state.score-10);state.mistakes++;}
  if(!state.attempted.includes(entry.id))state.attempted.push(entry.id);
  return {status:'wrong',points:0};
}
function finishCheck(){if(!state.completed&&allSolved()){state.completed=true;save();toast('Teljes rejtvény megfejtve! ✳');}}
function checkWord(){const entry=puzzle.entries[selected];if(entry.kind==='punchline'){checkPunchline();return;}
  if(isSolvedEntry(entry)){toast('Ezt a szót már megfejtetted.');return;}
  const result=inspectWord(entry);save();refresh();selectEntry(selected,activeCell);
  if(result.status==='correct')toast(`Szép munka! +${result.points} pont`);
  else if(result.status==='wrong')toast('Még nem stimmel. Nézd át a keresztezéseket!');
  else toast('Még hiányzik néhány betű.');
  finishCheck();
}
function checkAllWords(){let correct=0,wrong=0,incomplete=0,earned=0;
  for(const entry of normalEntries()){
    if(isSolvedEntry(entry))continue;
    const result=inspectWord(entry);if(result.status==='correct'){correct++;earned+=result.points;}
    else if(result.status==='wrong')wrong++;else incomplete++;
  }
  save();refresh();selectEntry(selected,activeCell);
  toast(correct||wrong?`${correct} jó szó${correct?` · +${earned} pont`:''}${wrong?` · ${wrong} javítandó`:''}`:`${incomplete} szó még hiányos.`);
  finishCheck();
}
function checkPunchline(){if(state.punchlineSolved){toast('A poént már megfejtetted.');return;}
  const cells=phraseCells(),given=cells.map(i=>state.values[i]||'').join('');
  if(given.length<cells.length){toast('A poén fősoraiban még hiányzik néhány betű.');return;}
  const answer=phraseEntries().map(e=>e.answer).join('');
  if(fold(given)===fold(answer)){
    state.punchlineSolved=true;cells.forEach(i=>state.values[i]=puzzle.letters[i]);state.score+=300;
    save();refresh();selectEntry(selected,activeCell);toast('Megvan a csattanó! +300 pont ✦');finishCheck();
  }else{
    if(state.wrongPunchline!==fold(given)){state.wrongPunchline=fold(given);state.score=Math.max(0,state.score-20);}
    save();refresh();toast('A poén még nem stimmel. Nézd meg a kiemelt sorokat!');
  }
}
function hint(){const e=puzzle.entries[selected],cells=entryCells(e),wrong=cells.find((i,k)=>fold(state.values[i])!==fold(e.answer[k]));if(wrong===undefined){toast('Minden betű a helyén van — ellenőrizd a szót!');return;}state.values[wrong]=puzzle.letters[wrong];state.hints++;if(!state.hinted.includes(e.id))state.hinted.push(e.id);state.score=Math.max(0,state.score-30);save();refresh();selectEntry(selected,wrong);toast('Egy betű a helyére került. −30 pont');}

document.addEventListener('keydown',e=>{if(e.target.closest('dialog')||e.ctrlKey||e.metaKey||e.altKey)return;
  if(e.key==='Backspace'){e.preventDefault();eraseLetter();return;}
  if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();move(1);return;}if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();move(-1);return;}
  if(e.key==='Enter'){e.preventDefault();checkWord();return;}
  if(e.target.id==='mobileInput')return;
  const ch=clean(e.key);if(ch.length===1){e.preventDefault();inputLetter(ch);}
});
setInterval(()=>{if(!state||state.completed||document.hidden)return;state.seconds++;$('#timer').textContent=timeText(state.seconds);if(state.seconds%5===0)save();},1000);
window.addEventListener('beforeunload',()=>{if(state)save();});
renderShell();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).catch(()=>{}));
