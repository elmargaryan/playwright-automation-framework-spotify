# E2E Test Automation Framework for Spotify Web Player

![Playwright Version](https://img.shields.io/badge/Playwright-v1.52.0-007acc)
![TypeScript Version](https://img.shields.io/badge/TypeScript-v5.8.3-007acc)

Welcome! This is a fully-featured test automation framework I built **_from scratch_** using [Playwright](https://playwright.dev/) and TypeScript.  
The project is focused on testing the Spotify Web Player, covering both **end-to-end (E2E)** and **API testing** scenarios and and is designed to be scalable, maintainable, and ready for real-world QA workflows.

---

## 🚀 Framework Features & Status

| Feature                             | Description                                               | Status         |
| ----------------------------------- | --------------------------------------------------------- | -------------- |
| **Page Object Model (POM)**         | Modular and reusable page classes for maintainable tests. | ✅ Completed   |
| **GitHub Actions Integration**      | Automated test execution on every push or pull request.   | ✅ Completed   |
| **Reusable Authentication State**   | Save and reuse login sessions for faster test execution.  | ✅ Completed   |
| **Self-Healing Selectors**          | Dynamic UI handling to minimize test flakiness.           | ✅ Completed   |
| **Multi-Environment Configuration** | Support for multiple environments (e.g., QA, UAT, Prod).  | ✅ Completed   |
| **Encrypted Environment Variables** | Secure handling of sensitive data using AES encryption.   | ✅ Completed   |
| **Custom Logging**                  | Logs for debugging and reporting using Winston.           | ✅ Completed   |
| **Test Data from JSON**             | JSON data for parameterized and data-driven tests.        | ✅ Completed   |
| **Test Data from CSV**              | Externalized test data support via CSV files.             | 🔜 Upcoming |
| **E2E Test Suite**                  | End-to-end user journey testing.                          | 🛠️ Building |
| **API Test Suite**                  | RESTful API test coverage.                                | 🔜 Upcoming |
| **Faker.js for Test Data**          | Dynamic and random test data generation.                  | 🔜 Upcoming |
| **Azure DevOps Report Integration** | Automated test reporting in Azure DevOps.                 | 🔜 Upcoming |

---

## 🛠️ Tools & Technologies

-   **Playwright**: Browser automation framework.
-   **TypeScript**: Strongly typed JavaScript for better maintainability.
-   **Winston**: Logging library for detailed test execution logs.
-   **CryptoJS**: AES encryption for securing environment variables.
-   **dotenv**: Environment variable management.
-   **GitHub Actions**: CI/CD pipeline for automated test execution.

---

## 📂 Project Structure

```bash
.
├── src/
│   ├── config/          # Environment-specific configuration files
│   ├── data/            # Test data in JSON or CSV formats
│   ├── global/          # Global setup and teardown scripts
│   ├── pages/           # Page Object Model classes
│   ├── tests/           # Test scripts
│   └── utils/           # Utility functions (e.g., logging, encryption)
├── .github/workflows/   # GitHub Actions CI/CD configuration
├── playwright.config.ts # Playwright configuration file
├── package.json         # Project dependencies and scripts
├── eslint.config.js     # Custom config for ESLint
└── README.md            # Project documentation
```

---

## 🧪 How to Run Tests

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (LTS version recommended).
2. Clone this repository and install dependencies:

    ```bash
    git clone https://github.com/elmargaryan/playwright-automation-framework-spotify.git
    cd playwright-automation-framework-spotify
    npm install
    ```

3. Set up environment variables in the `src/config/.env` file. Use the provided encryption utilities to secure sensitive data.

### Running Tests

-   **Run all tests**:

    ```bash
    npx playwright test
    ```

-   **Run a specific test**:

    ```bash
    npx playwright test src/tests/loginTest.spec.ts
    ```

-   **Run tests in a specific environment**:

    ```bash
    NODE_ENV=qa npx playwright test
    ```

-   **Generate an HTML report**:

    ```bash
    npx playwright show-report
    ```

---

## 📅 Roadmap

-   Complete E2E test suite.
-   Add API test coverage.
-   Integrate Azure DevOps for reporting.
-   Add support for CSV-based test data.
-   Implement visual regression testing.
-   Add Slack/Email notifications for test results.

---

## 👩🏻‍💻 About Me

Hey, I’m Elen! I’m using this project as an opportunity to gain practical experience in QA and test automation. It’s all about applying what I’ve learned in a hands-on way and improving my skills as I go.

If you're a recruiter, QA lead, or engineer — I’d love your feedback!

---

## 📬 Contact

-   **LinkedIn**: [Elen Margaryan](https://www.linkedin.com/in/elen-margaryan-qa/)
-   **GitHub**: [elmargaryan](https://github.com/elmargaryan)
