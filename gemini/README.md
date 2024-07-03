# Playwright End-to-End Tests for Vala Group

This repository contains automated end-to-end (E2E) tests for the Vala Group website (`https://valagroup.com`), implemented using Playwright and TypeScript.

## Project Goals

- **Ensure Quality:** Validate core functionality and user flows on the Vala Group website.
- **Maintainability:** Utilize the Page Object Model (POM) for organized and reusable test code.
- **CI Integration:** Automatically execute tests on every code push using GitHub Actions.

## Project Structure

- `gemini/`
  - `tests/`: Contains the actual test files (e.g., `example.spec.ts`).
  - `pages/`: Houses Page Object classes that model the website's pages (e.g., `valagroup.page.ts`).
  - `components/`: Stores Page Object classes for reusable components (e.g., `navigation.component.ts`).
  - `playwright.config.ts`: Configuration file for Playwright.
  - `package.json`: Lists project dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration.
- `.github/workflows/playwright-tests.yml`: GitHub Actions workflow definition.

## Getting Started

1. **Clone:** Clone this repository to your local machine.

2. **Install Dependencies:** Navigate to the `gemini` directory and run:

   ```bash
   npm install
   ```

3. **Run Tests:** Execute the tests using:

   ```bash
   npx playwright test
   ```

   You can run tests in a headed browser using:

   ```bash
   npx playwright test --headed
   ```

## GitHub Actions

This project is set up to run tests automatically on GitHub Actions. The workflow is defined in `.github/workflows/playwright-tests.yml`. Upon every push to the main branch, the tests will be executed, and the results will be reported back to GitHub.

## Writing Tests

- **POM:** Follow the Page Object Model to structure your test code.
- **Locators:** Use robust and maintainable locators (e.g., `data-testid` attributes).
- **Assertions:** Utilize Playwright's rich set of assertions to validate expected behavior.

Feel free to contribute new tests or improvements to existing ones!
