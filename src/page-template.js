// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projectName, desc, install, usage, license, contrib, tests, gitHub, email } = templateData;

  return `
  # ${projectName}

  ## Description
  ${desc}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation
  ${install}

  ## Usage
  ${usage}

  ## License
  ${license.join(', ')}

  ## Contributing
  ${contrib}

  ## Tests
  ${tests}

  ## Questions
  [Link to GitHub profile](https://github.com/${gitHub})
  [Email me](${email})

  `;
};
  // [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  // [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
  // [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
  // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)