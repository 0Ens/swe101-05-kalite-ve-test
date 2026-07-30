# Form Authentication hata mesajları kullanıcı adı enumeration'a izin veriyor

- **Sayfa:** https://the-internet.herokuapp.com/login
- **Tarih:** 2026-07-31
- **Ortam:** Brave (Windows)

## Adım adım tekrar-üretme

1. https://the-internet.herokuapp.com/login adresine git
2. Var olmayan bir kullanıcı adı + rastgele bir şifre ile giriş dene, hata mesajını not al
3. Geçerli bir kullanıcı adı (`tomsmith`) + yanlış bir şifre ile giriş dene, hata mesajını not al
4. İki mesajı karşılaştır
5. Aynı yanlış kombinasyonu art arda birçok kez dene, hesabın kilitlenip kilitlenmediğini gözlemle

## Beklenen davranış

Güvenlik best-practice'ine göre hata mesajı, kullanıcı adının sistemde var
olup olmadığını ele vermemeli; "invalid username or password" gibi genel bir
mesaj dönmeli. Ayrıca art arda çok sayıda başarısız denemeden sonra hesap
geçici olarak kilitlenmeli veya rate limiting devreye girmeli.

## Gerçekleşen davranış

Var olmayan bir kullanıcı adıyla girildiğinde mesaj kullanıcı adının hatalı
olduğunu söylüyor; var olan bir kullanıcı adı + yanlış şifre ile girildiğinde
ise mesaj şifrenin hatalı olduğunu söylüyor. Bu, bir saldırganın deneme-yanılma
ile geçerli kullanıcı adlarını tespit etmesine (enumeration) olanak tanıyor.
Ayrıca art arda sınırsız sayıda yanlış deneme yapılabiliyor, hesap hiçbir
noktada kilitlenmiyor — bu da enumeration ile bulunan kullanıcı adına karşı
brute-force denemesini kolaylaştırıyor.

## Severity

Major — doğrudan veri sızıntısına yol açmıyor ama saldırganın credential
stuffing/brute-force saldırısını önemli ölçüde kolaylaştıran bir bilgi
sızıntısı (kullanıcı adı enumeration) söz konusu.

## Priority

P2 — güvenlikle ilgili bir davranış olduğu için normal bir üründe bir sonraki
sürümü beklemeden, öncelikli olarak ele alınması gerekir.

## Gerekçe

Severity Major çünkü bulgu tek başına sistemi ele geçirmiyor ama saldırı
yüzeyini genişletiyor; Priority P2 çünkü güvenlik bulguları kozmetik
bulgulardan daha yüksek öncelikle değerlendirilmeli.
