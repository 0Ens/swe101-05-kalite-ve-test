import { test, expect } from '@playwright/test';

test('basarili login sonrasi inventory sayfasina yonlendirir', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory.html/);
});

test('gecersiz bilgilerle giris hata mesaji gosterir', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('yanlis_kullanici');
  await page.locator('[data-test="password"]').fill('yanlis_sifre');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('urun sepete eklendiginde rozette 1 gorunur', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});

test('urun sepetten cikarildiginda rozet kayboluyor', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
});

test('checkout akisi basariyla tamamlanir', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Enes');
  await page.locator('[data-test="lastName"]').fill('Erul');
  await page.locator('[data-test="postalCode"]').fill('34000');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
});