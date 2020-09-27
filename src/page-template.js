// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projectName, desc, tableContents, install, usage, license, contrib, tests, gitHub, email } = templateData;

  return `
    ${projectName}

    ## Description
    ${desc}

    ## Table of Contents
    ${tableContents}

    ## Installation
    ${install}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing
    ${contrib}

    ## Tests
    ${tests}

    ## Questions
    For questions, please reach out to me on github (${gitHub}) or via email (${email}).

  `;
};
