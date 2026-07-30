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