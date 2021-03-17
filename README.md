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
