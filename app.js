const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./utils/generate-readme');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Please enter a description about your project (Required)',
      validate: descInput => {
        if (descInput) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tableContents',
      message: 'Please enter table of contents for the readme file(Required)',
      validate: tableContentsInput => {
        if (tableContentsInput) {
          return true;
        } else {
          console.log('Please enter a table of contents!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation details (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter the usage details (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter usage!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please enter licensing details (Required)',
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('Please enter a license!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter contribution details (Required)',
      validate: contributingInput => {
        if (contributingInput) {
          return true;
        } else {
          console.log('Please enter a contributor!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter testing details (Required)',
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
          console.log('Please enter tests!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please enter some questions (Required)',
      validate: questionsInput => {
        if (questionsInput) {
          return true;
        } else {
          console.log('Please enter a question');
          return false;
        }
      }
    },
  ]);
};

promptUser()
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return generatePage();
  })
  .catch(err => {
    console.log(err);
  });
