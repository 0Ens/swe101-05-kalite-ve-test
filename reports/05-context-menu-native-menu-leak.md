# Context Menu sayfasında JS alert kapatıldıktan sonra native context menu de beliriyor

- **Sayfa:** https://the-internet.herokuapp.com/context_menu
- **Tarih:** 2026-07-31
- **Ortam:** Brave (Windows)

## Adım adım tekrar-üretme

1. https://the-internet.herokuapp.com/context_menu adresine git
2. Sayfadaki gri kutunun içine sağ tıkla — bir JS alert açılır
3. Alert'te "OK"e bas
4. Hiçbir ek tıklama yapmadan, kutunun aynı tıklama noktasına bak

## Beklenen davranış

Sayfa sağ tık olayını kendi JS alert'iyle karşılıyor, bu da native tarayıcı
context menu'sünü tamamen engellemeyi (preventDefault) hedeflediğini gösteriyor.
Bu yüzden alert kapatıldıktan sonra ekranda başka bir menü belirmemeli.

## Gerçekleşen davranış

JS alert'te OK'e basıldıktan hemen sonra, ek bir sağ tık yapılmadan, tarayıcının
native context menu'sü otomatik olarak aynı tıklama konumunda (kutunun içinde)
beliriyor. Bu davranış her denemede tutarlı şekilde tekrarlanıyor. Yani site
native menüyü tam olarak bastıramıyor, sadece geciktiriyor.

## Severity

Minor — kullanıcı için pratik bir olumsuz sonucu yok, hatta native menünün
belirmesi bazı kullanıcılar için faydalı bile olabilir; sadece sitenin kendi
iddia ettiği davranışla (native menüyü tamamen engellemek) gerçekleşen
arasında teknik bir tutarsızlık var.

## Priority

P4 — kullanılabilirliği bozmuyor, kimseyi engellemiyor, kozmetik/teknik bir
detay olduğu için backlog'da beklemesi sorun teşkil etmez.

## Gerekçe

Severity Minor çünkü kullanıcı deneyimini olumsuz etkilemiyor, sadece
beklenen davranışla gerçekleşen arasında fark var; Priority P4 çünkü bu
farkın düzeltilmemesinin hiçbir pratik maliyeti yok.
