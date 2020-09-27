// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projectName, desc, tableContents, install, usage, license, contrib, tests, questions } = templateData;

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
    ${questions}

  `;
};
