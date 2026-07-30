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

**Perde 1 — Bug avcısı:** Genel severity/priority derecelendirmesini yapmak beni
zorladı; gerçek hayat senaryolarında ciddiyetin ne olacağını düşününce net karar
veremediğim, "bu gerçekten bug mı yoksa tasarım böyle mi olmalı" diye kendime
sorup arada kaldığım anlar oldu.

**Perde 2 — TDD katası:** En çarpıcı deneyimim, testi yazmadan önce kodun nasıl
davranması gerektiğini net şekilde düşünmeye zorlanmamdı. `add` fonksiyonunu ilk
yazmaya çalıştığımda TypeScript sözdizimine hâkim olmadığım için zorlandım
(Python alışkanlığıyla karıştırdım), bu da bana dilin temel kurallarını (`==`
yerine `===`, `{}` blokları, fonksiyon parametreleri) tekrar düşündürdü. Ayrıca 4. testin (çoklu sayı toplama) hiç kırmızıya düşmeden direkt yeşil geçmesi, iyi
tasarlanmış bir kodun baştan genellenebilir olabileceğini gösterdi.

**Perde 3 — İlk otomasyon:** Codegen'in ürettiği kod ile elle yazdığım kod
arasındaki fark beni şaşırttı: codegen benim gereksiz tıklamalarımı (aynı
input'a birden fazla tıklama, boş container'lara tıklama) birebir kaydediyordu,
oysa elle yazınca sadece işe yarayan adımları (`fill`, `click`) bırakabildim.
Ayrıca `shopping-car-link` gibi bir yazım hatasını incele (inspect) ile kontrol
ederek yakaladım — bu, locator'ı tahmin etmek yerine doğrulamanın önemini
gösterdi. `data-test` attribute'larının CSS class'larından veya görünen
metinden neden daha sağlam olduğunu da bu süreçte kavradım.
