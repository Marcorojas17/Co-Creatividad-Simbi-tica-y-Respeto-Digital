import { test, expect } from '@playwright/test';
test('NOM-024 - lang es-MX y focus', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang','es-MX');
});
test('ISO27001 - headers seguridad', async ({ page }) => {
  const res = await page.goto('/');
  const h = res?.headers() || {};
  expect(h['x-content-type-options']).toBe('nosniff');
  expect(h['x-kronos-seal']).toContain('2607086319439');
});
test('440Hz button funciona', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /440Hz/ }).click();
  await expect(page.getByText(/SONANDO/)).toBeVisible({ timeout: 3000 });
});
test('KRONOS 2036 visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('KRONOS 2036')).toBeVisible();
});
