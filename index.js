// Uncomment to Test
// const fetch = require('node-fetch');

class ActionButtonJsonToCSV {
  constructor(props) {}

  // Called to retrieve the render information for the button.
  // Currently only the text of the button is required.
  async render(props) {
    return {
      text: 'Download/Export as CSV'
    };
  }

  // Called when the action button is clicked
  async execute(props) {
    console.log('===========');
    console.log(props);
    console.log('===========');

    const email = 'test@example.com';
    // const json = props.queryResponse;
    const json = {
      "data": {
        "teachers": {
          "nodes": [{
              "id": "t1",
              "name": "Smith",
              "school": "Woodbury",
              "dept": "PE"
            },
            {
              "id": "t2",
              "name": "Brown",
              "school": "Woodbury",
              "dept": "English",
              "awards": "Best Teacher Ever Award"
            },
            {
              "id": "t3",
              "name": "Johnson",
              "school": "Franklin",
              "dept": "FACS"
            }
          ]
        }
      }
    };
    const jsonString = JSON.stringify(json);
    const url = `https://json-csv.com/api/getcsv?email=${email}&json=${jsonString}&nestedDataType=3`;

    const testCsvOutput = '"a", "b", "c"';
    const testBlob = new Blob([testCsvOutput], { type: "text/csv;charset=utf-8" });
    saveAs(testBlob, 'download.csv');

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


// Uncomment to Test
// const test = new ActionButtonJsonToCSV();
// test.execute();
