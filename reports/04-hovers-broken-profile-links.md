# Hovers sayfasında tüm "View profile" linkleri 404 veriyor

- **Sayfa:** https://the-internet.herokuapp.com/hovers
- **Tarih:** 2026-07-31
- **Ortam:** Brave (Windows)

## Adım adım tekrar-üretme

1. https://the-internet.herokuapp.com/hovers adresine git
2. Herhangi bir kullanıcı avatarının üzerine fareyle gel (hover)
3. Çıkan "View profile" linkine tıkla
4. Adım 2-3'ü diğer iki avatar için de tekrarla (1, 2 ve 3 numaralı kullanıcılar)

## Beklenen davranış

"View profile" linkine tıklandığında ilgili kullanıcının profil sayfası
açılmalı (ör. `/users/1`, `/users/2`, `/users/3`).

## Gerçekleşen davranış

Üç kullanıcının linki de (`/users/1`, `/users/2`, `/users/3`) kendi
URL'sine yönlendiriyor ama üçü de sitenin kendi tasarladığı "not found"
sayfasını gösteriyor — yani özellik %100 oranında çalışmıyor. Geri tuşu ile
Hovers sayfasına sorunsuz dönülebiliyor, başka bir yan etki gözlenmedi.

## Severity

Major — "View profile" özelliği üç örnekte de (yani tüm kapsamıyla) hiç
çalışmıyor, ama bu site genelini veya diğer ana akışları bloklamıyor, sadece
kendi kapsamındaki tek bir özellik tamamen işlevsiz.

## Priority

P3 — bu link sitenin ana akışında (kayıt, giriş, temel işlevler) yer almıyor,
sadece hover ile ortaya çıkan dekoratif/ikincil bir özellik; bu yüzden tam
kırık olmasına rağmen acil müdahale gerektirmiyor.

## Gerekçe

Severity Major çünkü özelliğin kendisi tamamen (yüzde yüz) çalışmıyor;
Priority P3 çünkü bu özellik sitenin ana kullanıcı akışının bir parçası
değil, kırık olması genel kullanılabilirliği etkilemiyor.
