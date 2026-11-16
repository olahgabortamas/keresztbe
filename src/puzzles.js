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
  ['PAPÍR','Erre nyomtatják az újságot'],['TOLL','Tintával írható eszköz'],['CERUZA','Radírozható íróeszköz'],['ÚJSÁG','Híreket közlő lap'],
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
  ['FÜGGÖNY','Az ablak előtt lóg'],['SZŐNYEG','A padlón fekszik'],['POLC','Könyvek állnak rajta'],['KANAPÉ','Nappali ülőbútor'],
  ['FÉNY','A sötétség ellentéte'],['ÁRNYÉK','A fény útjába állva keletkezik'],['HAJNAL','Napkelte előtti idő'],['ALKONY','Napnyugta körüli idő'],
  ['ÉJSZAKA','A sötét napszak'],['HÓNAP','Nagyjából harminc nap'],['NYÁR','A legmelegebb évszak'],['ŐSZ','A lombhullás évszaka'],
  ['TÉL','A leghidegebb évszak'],['NAPTÁR','Dátumokat mutat'],['FOTÓ','Fényképezőgéppel készül'],['ECSET','Festő kezében van'],
  ['FESTÉK','Színes anyag a vásznon'],['VÁSZON','Erre fest a művész'],['MÚZEUM','Kiállítások otthona'],['SZOBOR','Faragott vagy öntött műalkotás'],
  ['DAL','Énekelhető zenemű'],['HANG','Ezt hallja a fülünk'],['RITMUS','A zene lüktetése'],['GITÁR','Pengetős hangszer'],
  ['ZONGORA','Billentyűs hangszer'],['HEGEDŰ','Vonóval szólaltatják meg'],['TÉRKÉP','Útvonalat keresünk rajta'],['IRÁNY','Merre tartunk'],
  ['ÉSZAK','Az iránytű egyik fő iránya'],['KELET','Itt kel fel a nap'],['NYUGAT','Itt nyugszik le a nap'],['TÚRA','Hosszabb természetjárás'],
  ['SÁTOR','Kempingben alhatunk benne'],['LÁNG','Égő tűz fényes része'],['FÜST','A tűzből száll fel'],['RÓKA','Vörös bundájú erdei állat'],
  ['BAGOLY','Éjjel vadászó madár'],['BÉKA','A tó partján brekeg'],['HANGYA','Szorgos, apró rovar'],['PATAK','Kisebb folyóvíz'],
  ['SZIGET','Vízzel körülvett föld'],['KIKÖTŐ','Hajók állomása'],['KAVICS','Apró, lekerekített kő'],['FENYŐ','Tűlevelű fa'],
  ['TÖLGY','Makkot termő fa'],['BÚZA','Liszt készül belőle'],['LISZT','Őrölt gabona'],['TÉSZTA','Főzve vagy sütve esszük'],
  ['PITE','Töltött sütemény'],['TORTA','Születésnapon szeleteljük'],['KAKAÓ','Csokoládés ital'],['BÖGRE','Füles ivóedény'],
  ['KANÁL','Leveshez használjuk'],['VILLA','Fogazott evőeszköz'],['TÁNYÉR','Erre tálaljuk az ételt'],['BORS','Csípős fűszer'],
  ['HAGYMA','Könnyet csalhat a szemünkbe'],['PAPRIKA','Piros fűszernövény'],['UBORKA','Zöld, ropogós zöldség'],['RÉPA','Narancssárga gyökérzöldség'],
  ['NAGYI','Nagymama becézve'],['ORVOS','Betegeket gyógyít'],['POSTÁS','Leveleket kézbesít'],['SOFŐR','Járművet vezet'],
  ['PINCÉR','Étteremben szolgál fel'],['ÍRÓ','Regényt alkot'],['KÖLTŐ','Verseket ír'],['VERS','Rímekkel is íródhat'],
  ['MESE','Esti történet gyerekeknek'],['REGÉNY','Hosszabb prózai mű'],['FEJEZET','A könyv egyik része'],['KÉRDÉS','Választ vár'],
  ['VÁLASZ','Kérdésre felel'],['POÉN','A vicc csattanója'],['VICC','Nevetésre késztető történet'],['RAJZ','Ceruzával készült kép'],
  ['SZÁM','Mennyiséget jelöl'],['KOCKA','Hatlapú test vagy dobókellék'],['KÁRTYA','Pakliban található lap'],['LABDA','Kerek sporteszköz'],
  ['ÉG','Fejünk fölött terül el'],['TŰZ','Lángolva ég'],['VÍZ','A szomjúságot oltja'],['JÉG','Megfagyott víz'],
  ['SÁR','Eső után az úton lehet'],['KŐ','Kemény ásványdarab'],['RÉT','Füves, nyílt terület'],['TÁJ','A környék látványa'],
  ['MÁK','Apró fekete szemű növény'],['RÁK','Ollós vízi állat'],['SÜN','Tüskés kis emlős'],['LÚD','Nagytestű házi szárnyas'],
  ['KÚT','Vizet meríthetünk belőle'],['KÉS','Vágó evőeszköz'],['TÁL','Nagyobb edény az asztalon'],['RÚD','Hosszú, egyenes pálca'],
  ['KÉZ','Öt ujja van'],['LÁB','Járáskor használjuk'],['FEJ','A test legfelső része'],['SZEM','Látás szerve'],
  ['FÜL','Hallás szerve'],['ORR','Szaglás szerve'],['SZÁJ','Beszédre is használjuk'],['HAJ','A fejen nő'],
  ['VÉR','Az erekben kering'],['ÁGY','Alváshoz használt bútor'],['HÁZ','Lakóépület'],['FAL','A szoba oldala'],
  ['PAD','Parkban is ülhetünk rajta'],['SZÉK','Háttámlás ülőbútor'],['KAPU','A kerítés nyílása'],['GÓL','Labdajátékban szerzett pont'],
  ['KÖR','Önmagába visszatérő vonal'],['ÍV','Hajlított vonal'],['VÁR','Erődített régi épület'],['NÉV','Így szólítanak'],
  ['RÍM','Versek sorvégi összecsengése'],['CÉL','Amit el szeretnénk érni'],['VÉG','Valaminek az utolsó része'],['DÍJ','Jutalom elismerésért'],
  ['BÁL','Ünnepi táncmulatság'],['SÓ','Sós ízt adó fűszer'],['TÓ','Állóvíz'],['FŰ','A gyepet alkotja'],
  ['FA','Törzse és lombja van'],['ÚT','Ezen közlekedünk'],['HÉT','Hét nap együtt'],['ÉV','Tizenkét hónap'],
  ['LAP','Egy oldal a könyvben'],['SOR','Egymás mellett álló elemek'],['RAJ','Együtt repülő méhek csoportja'],['LÉC','Keskeny faléc']
].map(([answer, clue]) => ({ answer: answer.toUpperCase(), clue }));

function hash(seed) { let x=seed|0; return () => { x^=x<<13; x^=x>>>17; x^=x<<5; return (x>>>0)/4294967296; }; }

export function makePuzzle(size, seed, title, subtitle, joke) {
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
  if(joke){
    joke.segments.forEach((segment,index)=>{
      const answer=segment.replace(/[^A-ZÁÉÍÓÖŐÚÜŰ]/g,'');
      if(answer.length>size-1)throw new Error('Punchline segment is too long');
      const middle=Math.floor(size/2);
      const row=joke.segments.length===3?middle+(index-1)*4:middle+(index===0?-2:2);
      const col=Math.max(1,Math.floor((size-answer.length)/2));
      add({answer,clue:`A vicc poénja ${index+1}. rész`,kind:'punchline',part:index},row,col,1);
    });
  }else{
    const anchor=pool.find(w=>w.answer.length>=Math.min(8,size-3));
    pool.splice(pool.indexOf(anchor),1);
    add(anchor,Math.floor(size/2),Math.floor((size-anchor.answer.length)/2),1);
  }
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
  return {size,seed,title,subtitle,joke,letters,clues,entries:placed};
}

export const editions=[
  {id:'reggeli',size:15,seed:152,title:'Reggeli derű',subtitle:'Egy csésze mellé',tag:'Klasszikus',joke:{setup:'Miért maradt sötét az ég hétfő reggel?',segments:['MERT A NAP','SZABADSÁGON','VAN'],answer:'Mert a nap szabadságon van.'}},
  {id:'vasarnapi',size:19,seed:111,title:'Vasárnapi séta',subtitle:'Hosszabb kikapcsolódás',tag:'Nagy',joke:{setup:'Miért nem lehet titkot tartani a könyvtárban?',segments:['MERT MINDEN KIDERÜL','A SOROK KÖZÖTT'],answer:'Mert minden kiderül a sorok között.'}},
  {id:'mester',size:23,seed:79,title:'A nagy kihívás',subtitle:'A türelmes fejtőknek',tag:'Óriás',joke:{setup:'Miért nem utazik taxival a csiga?',segments:['MERT A HÁZA NEM FÉR BE','A CSOMAGTARTÓBA'],answer:'Mert a háza nem fér be a csomagtartóba.'}},
  {id:'kert',size:15,seed:99,title:'Kerti idő',subtitle:'Rövid fejtörő egy csattanóval',tag:'Klasszikus',joke:{setup:'Miért vitt a kertész órát a kertbe?',segments:['HOGY IDŐBEN','ÜLTESSE EL','A VIRÁGOKAT'],answer:'Hogy időben ültesse el a virágokat.'}},
  {id:'tenger',size:19,seed:59,title:'Hullámhossz',subtitle:'Tengerparti szóvadászat',tag:'Nagy',joke:{setup:'Miért szeret a matektanár a tengerparton sétálni?',segments:['MERT SZÁMOLHAT','A HULLÁMOKKAL'],answer:'Mert számolhat a hullámokkal.'}},
  {id:'csillag',size:23,seed:61,title:'Csillagos ötös',subtitle:'Esti kihívás türelmes fejtőknek',tag:'Óriás',joke:{setup:'Miért ment a csillag iskolába?',segments:['HOGY RAGYOGÓ','BIZONYÍTVÁNYT KAPJON'],answer:'Hogy ragyogó bizonyítványt kapjon.'}}
];
