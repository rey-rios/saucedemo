# saucedemo
Sauce Demo repo for `https://www.saucedemo.com/`

## Requirements
1. Chrome browser installed
2. Nodejs installed
3. Testcafe installed

## Installation

1. Clone repository using git bash to your desired location:
</br> `git clone https://github.com/rey-rios/saucedemo.git`

2. Open the cloned project using Visual Studio Code (VSCode)

3. In VSCode's terminal run the following command:
</br> `npm install`

4. Create a **.env** file at project's root

5. Populate the **.env** file with valid username and password for the Suacedemo app
</br>Example below, replace the values in curly braces (remove the curly braces as well):
</br>`-------.env file-----------`
</br>`USER_NAME={valid_user_name}`
</br>`PASSWORD={valid_password}`
</br>`---------------------------`

## Running the tests
Execute below command in VSCode's terminal to run all the tests in Chrome:
</br>`npm run test-all-chrome`
</br></br>
Execute below command in VSCode's terminal to run all the tests in Chrome and generate a HTML execution report*:
</br>`npm run test-all-chrome-with-report`
</br></br>
Execute below command in VSCode's terminal to run all the tests in Firefox:
</br>`npm run test-all-firefox`
</br></br>Execute below command in VSCode's terminal to run all the tests in Firefox and generate a HTML execution report*:
</br>`npm run test-all-firefox-with-report`
</br></br>
Execute below command in VSCode's terminal to run all the tests in Safari:
</br>`npm run test-all-safari`
</br></br>Execute below command in VSCode's terminal to run all the tests in Safari and generate a HTML execution report*:
</br>`npm run test-all-safari-with-report`
</br></br>
Execute below command in VSCode's terminal to run all the tests in MS Edge:
</br>`npm run test-all-edge`
</br></br>Execute below command in VSCode's terminal to run all the tests in MS Edge and generate a HTML execution report*:
</br>`npm run test-all-edge-with-report`
</br></br>
Execute below command in VSCode's terminal to run all the tests in all installed browsers:
</br>`npm run test-all-all-browsers`
</br></br>Execute below command in VSCode's terminal to run all the tests in all installed browsers and generate a HTML execution report*:
</br>`npm run test-all-all-browsers-with-report`
</br></br>*\*HTML Execution Report will be located in below path:*
</br>`page_model/reports/report.html`
