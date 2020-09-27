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