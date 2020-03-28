const got = require('got');
const core = require('@actions/core');
// const github = require('@actions/github');

(async () => {
  try {
    const response = await got('https://mtgarena.downloads.wizards.com/Live/Windows32/version');
    console.log(`The response: ${response.body}`);
    const responseJson = JSON.parse(response.body);
    console.log(`Versions: ${JSON.stringify(responseJson.Versions)}`);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
