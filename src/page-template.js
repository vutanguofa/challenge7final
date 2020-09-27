// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projectName, desc, install, usage, license, contrib, tests, gitHub, email } = templateData;

  return `
  # ${projectName}
  
  ## License
  ${license}
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

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