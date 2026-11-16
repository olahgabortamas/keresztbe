# Keresztbe

Magyar, skandináv stílusú keresztrejtvény böngészőre és telefonra. Statikus, telepíthető webapp, szerver és fizetős szolgáltatás nélkül.

## Indítás

```bash
npm run dev
```

Ellenőrzés: `npm test`, éles build: `npm run build`. A `dist` könyvtár bármely statikus tárhelyre, például GitHub Pagesre kitehető. Nincs külső futásidejű függőség.

## Játék

- Három 15×15, 19×19 és 23×23 mezős rejtvény, magyar meghatározásokkal a rácsban.
- Egérrel, érintéssel és billentyűzettel játszható. A tábla kis képernyőn görgethető.
- Helyes szóért 100 pont, hibátlan kezdés esetén 25 bónusz; súgás és hibás ellenőrzés levonással jár.
- A haladás és a pontszám az eszköz `localStorage` tárolójában marad. Nincs fiók vagy szerveroldali ranglista.
- PWA manifest és service worker a telepítéshez és a már meglátogatott tartalom offline eléréséhez.

## További rejtvények

A magyar szó és meghatározás készlet a `src/puzzles.js` fájlban van. Az alkalmazás determinisztikusan állít össze belőlük érvényes metszéseket. Új kiadást az `editions` listába lehet felvenni. A később tervezett szóbehelyezős típus külön játékmódként illeszthető a felülethez és ugyanazzal a helyi mentési sémával tárolható.
