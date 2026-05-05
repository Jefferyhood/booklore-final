📚 BookLore E2E Testing Project
📌 Overview

This project focuses on end-to-end (E2E) testing of the BookLore platform. The goal was to validate core user functionality such as authentication, book searching, and general navigation through automated testing.

During this project, multiple testing frameworks were explored, including Cypress and Selenium. After encountering limitations with Cypress, the testing approach was transitioned to Selenium with Python for improved flexibility and control.

🎯 Project Objectives
Automate core user workflows in BookLore
Validate login and authentication functionality
Test search and book interaction features
Compare E2E testing frameworks in a real-world scenario
Generate test reports for analysis
🛠️ Tech Stack
Language: Python, JavaScript
Frameworks:
Selenium WebDriver
PyTest
Cypress
Reporting: pytest-html
Environment: Localhost (Docker-based BookLore setup)
🔄 Testing Approach
Phase 1: Cypress (Initial Attempt)

Cypress was initially used to build the test suite due to its simplicity and fast setup.

Challenges encountered:

Difficulty handling dynamic UI components
Issues with login flow and session handling
Limited flexibility for more complex test scenarios
Phase 2: Selenium + PyTest (Final Solution)

The project transitioned to Selenium with PyTest to overcome Cypress limitations.

Why Selenium worked better:

More control over browser interactions
Better handling of authentication workflows
Easier debugging for complex UI behavior
Scalable test structure using PyTest
✅ Test Coverage

The automated test suite includes:

🔐 Login functionality testing
🔎 Book search validation
📄 Page navigation checks
🚪 Logout workflow
⚡ Smoke tests for basic system functionality
📊 Test Reporting

Test execution results are generated using pytest-html, producing a detailed HTML report including:

Test case results (pass/fail)
Execution time
Error logs for failed tests
🚀 How to Run the Tests
1. Clone the Repository
git clone https://github.com/your-username/booklore-e2e-testing.git
cd booklore-e2e-testing
2. Install Dependencies
pip install -r requirements.txt
3. Set Environment Variables
set BL_BASE_URL=http://localhost:7171
set BL_USER=your_username
set BL_PASS=your_password
4. Run Tests
pytest --html=report.html --self-contained-html
📁 Project Structure
booklore-e2e-testing/
│
├── tests/
│   ├── test_login.py
│   ├── test_search.py
│   └── test_smoke.py
│
├── cypress/              # Initial Cypress attempt
├── reports/              # Generated HTML reports
├── requirements.txt
└── README.md



💡 Key Takeaways
Real-world testing often requires adapting tools based on project needs
Cypress is great for simple flows, but Selenium provides deeper control for complex scenarios
Proper test design and structure are just as important as the tools used
Debugging failures is a critical part of building reliable test automation



🔮 Future Improvements
Add CI/CD integration (GitHub Actions)
Expand test coverage (edge cases, negative testing)
Improve test data management
Parallel test execution
👤 Author

Jeffrey Hood
Master’s Student – Software Engineering
