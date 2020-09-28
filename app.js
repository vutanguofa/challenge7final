const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-readme');

// Prompt user inputs to create readme sections
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Please enter your project name. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Please enter your project description. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project description.');
          return false;
        }
      }
    }, 
    {
      type: 'input',
      name: 'install',
      message: 'Please enter installation details. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter installation details.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('What is the usage?');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license (Check all that apply)',
      choices: ['Apache-2.0', 'IPL-1.0', 'MIT', 'MPL-2.0']
    },
    {
      type: 'input',
      name: 'contrib',
      message: 'Please enter contributors. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter contributors.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter testing results. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter testing results.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is your GitHub username? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('What is your GitHub username?');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('What is your email address?');
          return false;
        }
      }
    }

  ]);
};

promptUser()
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
