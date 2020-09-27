// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projectName, desc, install, usage, license, contrib, tests, gitHub, email } = templateData;

  return `
    ${projectName}

    ## Description
    ${desc}

    ## Table of Contents
    [Installation](#Installation)<br />
    [Usage](#Usage)<br />
    [License](#License)<br />
    [Contributing](#Contributing)<br />
    [Tests](#Tests)<br />
    [Questions](#Questions)<br />

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
    For questions, please reach out to me on github (${gitHub}) or via email (${email}).

  `;
};