
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

    if (props.variables == "" || props.variables["json-csv-email"] != undefined) {
      alert('Please set the api email address in variables. \n Like this: {"json-csv-email": "test@example.com"}');
      return;
    }

    const email = JSON.parse(props.variables["json-csv-email"]);
    const json = props.queryResponse;
    const jsonString = JSON.stringify(json);
    const url = `https://json-csv.com/api/getcsv?email=${email}&json=${jsonString}&nestedDataType=3`;

    fetch(url, {
      method: 'POST',
    })
    .then(async response => {
      const csvOutput = await response.text();
      const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8" });
      saveAs(blob, 'download.csv');
    });
  }

  // Perform cleanups in this function
  async destroy(props) {}
}

// Add the class to the Altair plugins object
window.AltairGraphQL.plugins.ActionButtonJsonToCSV = ActionButtonJsonToCSV;
