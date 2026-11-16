# Keresztbe

Magyar, skandináv stílusú keresztrejtvény böngészőre és telefonra. Statikus, telepíthető webapp, szerver és fizetős szolgáltatás nélkül.

## Indítás

```bash
npm run dev
```

Ellenőrzés: `npm test`, éles build: `npm run build`. A `dist` könyvtár bármely statikus tárhelyre, például GitHub Pagesre kitehető. Nincs külső futásidejű függőség.

## Játék

- Három 15×15, 19×19 és 23×23 mezős rejtvény, magyar meghatározásokkal a rácsban.
- Mindhárom rejtvényhez egy vicc kezdete tartozik. A kiemelt fősorokból áll össze a csattanó, amelynek helyes megfejtése 300 pontot ér.
- Az Összes szó ellenőrzése gomb egyszerre pontozza a kitöltött szavakat; a hiányosakat későbbre hagyja.
- Egérrel, érintéssel és billentyűzettel játszható.
- A teljes rács alapnézetben egyben látható; a nagyított nézetben görgethető. A szavak minden esetben keresztezik egymást.
- A megfejtés ékezet nélkül is helyes (például `KAVE` → `KÁVÉ`). A Backspace a beírás helyéről visszalép, és törli az előző betűt.
- Helyes szóért 100 pont, első próbálkozásra és súgás nélkül 25 bónusz; súgás és hibás ellenőrzés levonással jár. A poén külön ellenőrizhető.
- A haladás és a pontszám az eszköz `localStorage` tárolójában marad. Nincs fiók vagy szerveroldali ranglista.
- A rejtvényenkénti haladás a felületről újrakezdhető.
- PWA manifest és service worker a telepítéshez és a már meglátogatott tartalom offline eléréséhez.

## További rejtvények

A magyar szó és meghatározás készlet a `src/puzzles.js` fájlban van. Az alkalmazás determinisztikusan állít össze belőlük érvényes metszéseket. Új kiadást az `editions` listába lehet felvenni. A később tervezett szóbehelyezős típus külön játékmódként illeszthető a felülethez és ugyanazzal a helyi mentési sémával tárolható.
