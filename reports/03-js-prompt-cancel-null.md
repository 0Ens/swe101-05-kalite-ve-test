# JS Prompt'ta Cancel, kullanıcının "null" yazdığı gibi işleniyor

- **Sayfa:** https://the-internet.herokuapp.com/javascript_alerts
- **Tarih:** 2026-07-31
- **Ortam:** Brave (Windows)

## Adım adım tekrar-üretme

1. https://the-internet.herokuapp.com/javascript_alerts adresine git
2. "Click for JS Prompt" butonuna tıkla, açılan prompt'ta hiçbir şey yazmadan **Cancel**'a bas, sonuç metnini not al
3. Sayfayı tekrar aç, prompt'a bu sefer elle **"null"** kelimesini yazıp **OK**'e bas, sonuç metnini karşılaştır
4. Prompt'u boş bırakıp **OK**'e bas, sonuç metnini not al
5. Karşılaştırma için "Click for JS Confirm" butonuna tıkla ve **Cancel**'a bas, sonuç metnine bak

## Beklenen davranış

Kullanıcı prompt'u iptal ettiğinde (Cancel) sonuç metni bunu net şekilde
belirtmeli (ör. "You clicked: Cancel"), tıpkı JS Confirm sayfasının yaptığı
gibi. İptal etmek ile kutuya gerçekten "null" kelimesini yazmak birbirinden
davranışsal olarak ayırt edilebilmeli.

## Gerçekleşen davranış

Prompt'ta Cancel'a basıldığında ekranda "You entered: null" yazıyor — bu,
kullanıcının kutuya gerçekten "null" kelimesini yazıp OK'e basmasıyla
**birebir aynı sonucu** üretiyor. Buna karşın boş bırakıp OK'e basıldığında
"You entered: " (boş) yazıyor, yani sistem boş girdiyi doğru ayırt edebiliyor
ama Cancel'ı ayırt edemiyor. Aynı sayfadaki JS Confirm ise Cancel'a basıldığında
doğru şekilde "You clicked: Cancel" gösteriyor — yani site aynı ayrımı bir
diyalogda doğru yaparken diğerinde yapamıyor.

## Severity

Major — hiçbir veri kaybı veya işlev bloklaması yok, ama kullanıcının açıkça
iptal ettiği bir eylem, sistem tarafından geçerli bir "null" girdisi gibi
işlenip yanıltıcı şekilde gösteriliyor. Bu pattern gerçek bir formda (ör. bir
değeri güncelleyen bir alanda) tekrarlansaydı, kullanıcı iptal ettiğini
sanırken aslında "null" değeri kaydedilmiş olabilirdi.

## Priority

P2 — aynı sayfadaki JS Confirm örneği doğru davrandığına göre, Prompt için de
aynı mantığın (Cancel'ı ayrı ele almak) uygulanması muhtemelen kolay; kullanıcı
güvenini zedeleyen bir mantık hatası olduğu için düşük öncelikli backlog'a
atılmamalı.

## Gerekçe

Severity Major çünkü şu an gözlemlenen sistemde veri kaybı yok ama kullanıcıyı
aktif olarak yanıltıyor ve aynı pattern'in kritik bir sistemde (ör. bir değeri
güncelleyen form) tekrarlanması ciddi sonuçlar doğurabilir; Priority P2 çünkü
düzeltmesi kolay (Confirm'deki mantık örnek alınabilir) ve kullanıcı güvenini
etkileyen bir tutarsızlık, uzun süre beklememeli.
