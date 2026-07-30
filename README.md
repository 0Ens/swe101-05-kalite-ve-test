# swe101-05-kalite-ve-test

QA'nın üç yüzünü deneyen üç perdelik bir ödev: manuel bug avcılığı, TDD katası,
ve ilk e2e otomasyon testleri.

- **Perde 1 — Bug avcısı:** [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) üzerinde exploratory testing, bulgular [`reports/`](reports/) altında.
- **Perde 2 — TDD katası:** String calculator, red-green-refactor döngüsüyle [`src/stringCalculator.ts`](src/stringCalculator.ts) içinde çözüldü.
- **Perde 3 — İlk otomasyon:** [saucedemo.com](https://www.saucedemo.com/) üzerinde Playwright ile e2e testler, [`e2e/`](e2e/) altında.

## Kurulum

```bash
npm install
npx playwright install chromium
```

## Testleri çalıştırma

Unit testler (kata):

```bash
npm test
```

E2E testler (Saucedemo):

```bash
npm run test:e2e
```

## Proje yapısı

```
reports/    -> Perde 1: 5 bug raporu (markdown)
src/        -> Perde 2: string calculator implementasyonu
tests/      -> Perde 2: unit testler (vitest)
e2e/        -> Perde 3: Playwright e2e testleri
```

## Ne öğrendim

_(TODO — üç perde bittikten sonra doldurulacak)_

## Teslim notları

- **Repo:** `https://github.com/0Ens/swe101-05-kalite-ve-test`
- **Harcanan süre:** _(TODO)_
- **Zorluk / keyif puanı:** _(TODO)_
- **Öğrenme notu:** yukarıdaki "Ne öğrendim" bölümüne bakınız.
