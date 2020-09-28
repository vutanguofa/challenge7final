// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projectName, license, desc, install, usage, contrib, tests, gitHub, email } = templateData;

  return `
  # ${projectName}
  
  ## License
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/${license})

  ## Description
  ${desc}

  ## Table of Contents
  * [Installation](#installation)<br />
  * [Usage](#usage)<br />
  * [License](#license)<br />
  * [Contributing](#contributing)<br />
  * [Tests](#tests)<br />
  * [Questions](#questions)

  ## Installation
  ${install}

  ## Usage
  ${usage}

  ## Contributing
  ${contrib}

  ## Tests
  ${tests}

  ## Questions
  [Link to GitHub profile](https://github.com/${gitHub})<br />
  For additional questions, please email at: (${email})
  `;
};