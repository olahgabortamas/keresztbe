// Each clue is deliberately authored in Hungarian. Boards are generated once
// from this list, then validated before they reach the player.
export const wordBank = [
  ['NAPFÉNY','Derűs időben az ablakon besüt'],['KÁVÉ','Reggeli ital, gyakran tejjel'],['TAVASZ','A tél utáni évszak'],['SZIVÁRVÁNY','Színes ív az égen'],
  ['VIRÁG','Szirmokból álló növényi dísz'],['FAGYLALT','Hideg, gombócos édesség'],['KÖNYV','Lapozható olvasnivaló'],['ERDŐ','Fákkal borított terület'],
  ['CSILLAG','Éjszaka ragyog az égen'],['KERT','Virágok és vetemények helye'],['DUNA','Budapesten átfolyó folyó'],['BALATON','Magyarország legnagyobb tava'],
  ['ALMA','Gyakori piros vagy zöld gyümölcs'],['KÖRTE','Harang alakú gyümölcs'],['MÉZ','Méhek édes munkája'],['TEA','Forró ital filterből is'],
  ['ÁLOM','Alvás közben látott történet'],['MOSOLY','Öröm az arcon'],['ÖRÖM','Jó hírre érzett boldogság'],['ZENE','Dallamok és ritmusok világa'],
  ['TÁNC','Zenére végzett mozgás'],['MOZI','Filmnézés helye'],['SZÍNHÁZ','Élő előadások épülete'],['JÁTÉK','Szórakoztató elfoglaltság'],
  ['REJTVÉNY','Fejtörő, amit most is töltesz'],['BETŰ','Az ábécé egy eleme'],['SZÓ','Betűkből álló nyelvi egység'],['MONDAT','Írásjel zárja le'],
  ['PAPÍR','Erre nyomtatják az újságot'],['TOLl','Tintával írható eszköz'],['CERUZA','Radírozható íróeszköz'],['ÚJSÁG','Híreket közlő lap'],
  ['VÁROS','Sok utcából álló település'],['FALU','Kisebb vidéki település'],['UTCA','Házak között vezet'],['TÉR','Nyitott hely a városban'],
  ['HÍD','Két partot köt össze'],['VONAT','Síneken közlekedik'],['HAJÓ','Vízen közlekedő jármű'],['REPÜLŐ','Az égben utazunk vele'],
  ['FELHŐ','Az égen úszó pára'],['ESŐ','Felhőből hulló víz'],['HÓ','Télen hulló fehér csapadék'],['SZÉL','Mozgó levegő'],
  ['HEGY','Magas természeti kiemelkedés'],['VÖLGY','Hegyek közötti mélyedés'],['FOLYÓ','Medrében áramló víz'],['TENGER','Nagy sós víz'],
  ['PART','Víz melletti szárazföld'],['HOMOK','Apró szemek a strandon'],['KAGYLÓ','Tengerparti héjas kincs'],['HULLÁM','A víz felszínén fut'],
  ['MADÁR','Tollas, szárnyas állat'],['MACSKA','Doromboló háziállat'],['KUTYA','Hűséges négylábú társ'],['PILLANGÓ','Színes szárnyú rovar'],
  ['KONYHA','Itt készül az ebéd'],['ABLAK','Ezen át látunk ki'],['AJTÓ','Ezen lépünk be'],['ASZTAL','Lábakon álló bútor'],
  ['LÁMPA','Fényt adó tárgy'],['ÓRA','Az időt mutatja'],['PÁRNA','Fejünk alatt van alváskor'],['TAKARÓ','Alváskor betakarózunk vele'],
  ['REGGEL','A nap első szakasza'],['ESTE','A nappal utáni időszak'],['HÉTVÉGE','Szombat és vasárnap együtt'],['VASÁRNAP','A hét utolsó napja'],
  ['BARÁT','Jóban és rosszban mellettünk áll'],['CSALÁD','Rokonok közössége'],['ISKOLA','Tanulás intézménye'],['TANÁR','Az iskolában oktat'],
  ['DIÁK','Iskolába járó tanuló'],['FÜZET','Órai jegyzetek helye'],['TÁBLA','Erre ír a tanár'],['KRÉTA','Régi táblák íróeszköze'],
  ['SÜTEMÉNY','Édes falat a kávé mellé'],['PALACSINTA','Töltelékkel feltekert finomság'],['LEVES','Az ebéd első fogása'],['KENYÉR','Pékségben kapható alapétel'],
  ['SAJT','Tejből készült étel'],['TEJ','Fehér ital a bögrében'],['VAJ','Kenyérre kenhető tejtermék'],['CUKOR','Édesítéshez használjuk'],
  ['TÜKÖR','Visszanéz ránk a falról'],['KULCS','Zárat nyitunk vele'],['TÁSKA','Holminkat hordjuk benne'],['KABÁT','Hidegben felvesszük'],
  ['SÁL','Nyakunk köré tekerjük'],['SAPKA','Fejünket melegíti'],['CIPŐ','Lábbelink'],['ZOKNI','Cipő alá húzzuk'],
  ['BICIKLI','Kétkerekű, pedálos jármű'],['AUTÓ','Négykerekű közúti jármű'],['BUSZ','Sok utast szállító jármű'],['METRÓ','Föld alatt is járó városi vasút'],
  ['PIAC','Árusok és vásárlók helye'],['PÉNZ','Fizetőeszköz'],['BOLT','Itt vásárolunk'],['KOSÁR','Bevásárláskor megtelik'],
  ['NARANCS','Citrusféle gyümölcs'],['BANÁN','Sárga, görbe gyümölcs'],['EPER','Piros, apró nyári gyümölcs'],['SZILVA','Ősszel érő lila gyümölcs'],
  ['HOLD','Éjjel fénylik az égen'],['NAP','Nappal világít'],['BOLYGÓ','Csillag körül keringő égitest'],['ŰR','Bolygók közötti tér'],
  ['TITOK','Nem áruljuk el mindenkinek'],['KALAND','Izgalmas élmény'],['UTAZÁS','Útra kelés'],['EMLÉK','Múltból megmaradt kép'],
  ['RÓZSA','Tövises, illatos virág'],['TULIPÁN','Tavasszal nyíló hagymás virág'],['LEVÉL','A fa zöld része'],['GYÖKÉR','Növény föld alatti része'],
  ['FÜGGÖNY','Az ablak előtt lóg'],['SZŐNYEG','A padlón fekszik'],['POLC','Könyvek állnak rajta'],['KANAPÉ','Nappali ülőbútor']
].map(([answer, clue]) => ({ answer: answer.toUpperCase().replace('TOLL','TOLL'), clue }));

function hash(seed) { let x=seed|0; return () => { x^=x<<13; x^=x>>>17; x^=x<<5; return (x>>>0)/4294967296; }; }

export function makePuzzle(size, seed, title, subtitle) {
  const rand=hash(seed), letters=Array(size*size).fill(''), dirs=Array(size*size).fill(0), clues=new Map(), placed=[];
  const ix=(r,c)=>r*size+c;
  const inside=(r,c)=>r>=0&&c>=0&&r<size&&c<size;
  function fit(word,r,c,dir) {
    const dr=dir===2?1:0, dc=dir===1?1:0, cr=r-dr, cc=c-dc;
    if(!inside(cr,cc)||!inside(r+dr*(word.length-1),c+dc*(word.length-1))) return -1;
    const clueIndex=ix(cr,cc);
    if(letters[clueIndex]||clues.has(clueIndex)&&clues.get(clueIndex).some(x=>x.dir===dir)) return -1;
    let crosses=0;
    for(let k=0;k<word.length;k++) {
      const rr=r+dr*k, col=c+dc*k, p=ix(rr,col);
      if(clues.has(p)||letters[p]&&letters[p]!==word[k]||dirs[p]&dir) return -1;
      if(letters[p]) crosses++;
      else {
        for(const [nr,nc] of dir===1?[[rr-1,col],[rr+1,col]]:[[rr,col-1],[rr,col+1]]) {
          if(inside(nr,nc)&&letters[ix(nr,nc)]) return -1;
        }
      }
    }
    const ar=r+dr*word.length, ac=c+dc*word.length;
    if(inside(ar,ac)&&letters[ix(ar,ac)]) return -1;
    return crosses;
  }
  function add(item,r,c,dir) {
    const dr=dir===2?1:0, dc=dir===1?1:0, clueIndex=ix(r-dr,c-dc);
    const entry={...item,r,c,dir,id:placed.length}; placed.push(entry);
    clues.set(clueIndex,[...(clues.get(clueIndex)||[]),entry]);
    for(let k=0;k<item.answer.length;k++) {const p=ix(r+dr*k,c+dc*k);letters[p]=item.answer[k];dirs[p]|=dir;}
  }
  const pool=[...wordBank];
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  // Anchor near the centre. The seeded passes place only valid intersections.
  const anchor=pool.find(w=>w.answer.length>=Math.min(8,size-3));
  pool.splice(pool.indexOf(anchor),1);
  add(anchor,Math.floor(size/2),Math.floor((size-anchor.answer.length)/2),1);
  for(let pass=0;pass<5;pass++) for(const item of pool) {
    if(placed.some(p=>p.answer===item.answer)||item.answer.length>size-2) continue;
    let options=[];
    for(let r=0;r<size;r++) for(let c=0;c<size;c++) for(const dir of [1,2]) {
      const crosses=fit(item.answer,r,c,dir);
      if(crosses>0) options.push({r,c,dir,score:crosses*10-Math.abs(r-size/2)*.12-Math.abs(c-size/2)*.12+rand()*3});
    }
    options.sort((a,b)=>b.score-a.score);
    if(options.length) add(item,options[0].r,options[0].c,options[0].dir);
  }
  // Small self-contained entries finish the unused corners, as in a printed grid.
  for(const item of pool.filter(w=>w.answer.length>=3&&w.answer.length<=6)) {
    if(placed.some(p=>p.answer===item.answer)) continue;
    const options=[];
    for(let r=0;r<size;r++) for(let c=0;c<size;c++) for(const dir of [1,2]) {
      if(fit(item.answer,r,c,dir)===0) options.push({r,c,dir,score:rand()});
    }
    if(options.length){options.sort((a,b)=>b.score-a.score);add(item,options[0].r,options[0].c,options[0].dir);}
  }
  return {size,seed,title,subtitle,letters,clues,entries:placed};
}

export const editions=[
  {id:'reggeli',size:15,seed:1217,title:'Reggeli derű',subtitle:'Egy csésze mellé',tag:'Klasszikus'},
  {id:'vasarnapi',size:19,seed:7879,title:'Vasárnapi séta',subtitle:'Hosszabb kikapcsolódás',tag:'Nagy'},
  {id:'mester',size:23,seed:33103,title:'A nagy kihívás',subtitle:'A türelmes fejtőknek',tag:'Óriás'}
];
