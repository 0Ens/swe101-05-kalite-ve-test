# Checkboxes sayfasında ikinci checkbox varsayılan olarak işaretli geliyor

- **Sayfa:** https://the-internet.herokuapp.com/checkboxes
- **Tarih:** 2026-07-30
- **Ortam:** Brave (Windows)

## Adım adım tekrar-üretme

1. https://the-internet.herokuapp.com/checkboxes adresine git
2. Sayfa yüklendiğinde iki checkbox'ın durumuna bak

## Beklenen davranış

Her iki checkbox da sayfa ilk açıldığında işaretsiz (unchecked) olmalı.

## Gerçekleşen davranış

Sayfa açılır açılmaz ikinci checkbox işaretli geliyor. Sayfa yenilendiğinde
(refresh) de aynı durum korunuyor. Checkbox manuel olarak işaretlenip
kaldırılabiliyor, yani kilitli değil.

## Severity

Minor — işlevsellik bozulmuyor (checkbox manuel değiştirilebiliyor), sadece
varsayılan durum beklenmedik ve tutarsız.

## Priority

P4 — kozmetik/mantıksal bir tutarsızlık, hiçbir iş akışını engellemiyor,
acil müdahale gerektirmiyor.

## Gerekçe

Severity Minor çünkü kullanıcı deneyimini veya işlevselliği bozmuyor; bu
yüzden Priority de düşük (P4) çünkü ne bir kullanıcıyı engelliyor ne de
acil bir düzeltme gerektiriyor.
