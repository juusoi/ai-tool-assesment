// In your test file (e.g., example.spec.ts)
import { test } from '@playwright/test';
import { ValagroupPage } from './pages/valagroup.page';

test('Homepage loads and navigation works', async ({ page }) => {
  const valaPage = new ValagroupPage(page);
  await valaPage.goto();
  await valaPage.expectPageTitleContains(
    'Inspiring quality. Compiling happiness.'
  );
});
