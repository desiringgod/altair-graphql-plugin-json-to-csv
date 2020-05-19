
// ActionButtonJsonToCSV
class ActionButtonJsonToCSV {
  constructor(props) {}

  // Called to retrieve the render information for the button.
  // Currently only the text of the button is required.
  async render(props) {
    return {
      text: 'Download CSV'
    };
  }

  // Called when the action button is clicked
  async execute(props) {
    console.log('===========');
    console.log(props);
    console.log('===========');

    let variables;

    // Check if variables is a valid JSON string
    try { variables = JSON.parse(props.variables) } catch (e) {}

    const emailVariableExists = variables != undefined && variables["json-csv-email"] != undefined;
    const email = emailVariableExists ? variables["json-csv-email"] : '';
    const json = props.queryResponse;
    const jsonString = encodeURIComponent(JSON.stringify(json));
    const url = `https://json-csv.com/api/getcsv`;

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `email=${email}&json=${jsonString}&nestedDataType=3`
    })
    .then(async response => {
      const csvOutput = await response.text();
      console.log({csvOutput});
      const fileTooBigMessage = 'Limit hit. We only allow 1MB per day to be converted. Contact json-csv.com to upgrade your account and convert larger files.';
      if(csvOutput.includes('Limit hit.')) {
        alert(`${fileTooBigMessage}\n\nOnce you've set up an account, add your email address associated with the json-csv API to the variables like this:\n{json-csv-email: 'email@example.com'}`);
        return;
      }
      const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8" });
      saveAs(blob, 'download.csv');
    }).catch(err => {
      console.log({ err });
    });
  }

  // Perform cleanups in this function
  async destroy(props) {}
}

// Add the class to the Altair plugins object
window.AltairGraphQL.plugins.ActionButtonJsonToCSV = ActionButtonJsonToCSV;
