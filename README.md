* Created by Jitender Kumar on 21/07/2021.

#Introduction 
TODO: This project consist of all the positive and negative cases for Aura code challenge.

#Getting Started

 1. Implementation for test cases in node.js.
 2. Download and install node.js.
 3. For writing, code uses Visual Code Studio.
 
#Understanding the project framework

 1. All the tests are implemented in the directories i.e. scenarios under Test folder. 
 2. All configuration files are kept into the config directory.

#Commands to install the necessary modules:

 1. Go to the project path.
 2. Run the command to install necessary modules to run the project: npm install.
 3. Run the command to install mocha globally: npm install mocha -g


#Build and Test
**Run the particular test scripts**

 1. Go to the file path you wish to run i.e. `/test/scenarios/`
 2. Run the command-`npm run createaccountscenario DEV`  it will execute the all test cases in /test/scenarios/account.js file for the given environment server. (use --ACC and --PRD for staging and production servers)
 3. Command `npm run alltestcases DEV` will execute all the tests in all the files in specified path folder.
 

 **Getting Allure report result:

**If you want to get the Allure report, use the following command:** 

`npm run createaccountscenario DEV --reporter mocha-allure-reporter`  // to gathered information
`allure generate --clean`   // to generate report
`allure open`   // to open report

or

 `npm run createaccountscenario TST --reporter mocha-allure-reporter && allure generate && allure open`
