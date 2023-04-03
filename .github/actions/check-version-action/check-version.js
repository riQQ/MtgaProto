import got from 'got';
import * as core from '@actions/core';
// const github = require('@actions/github');

(async () => {
  try {
    const response = await got('https://mtgarena.downloads.wizards.com/Live/Windows64/version');
    console.log(`The response: ${response.body}`);
    const responseJson = JSON.parse(response.body);
    console.log(`Versions: ${JSON.stringify(responseJson.Versions)}`);
    core.setOutput("msiUrl", JSON.stringify(responseJson.CurrentInstallerURL));
  } catch (error) {
    core.setFailed(error.message);
  }
})();
