import FileSaver from 'file-saver';

class ActionButtonJsonToCSV {
  constructor(props) {
    console.log('-----------');
    console.log(props);
    console.log('-----------');
  }

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
    const json = {
      "test": true,
      "test2": false
    };
    const jsonString = JSON.stringify(json);
    const url = `https://json-csv.com/api/getcsv?email=${email}&json=${jsonString}`;

    fetch(url, {
      method: 'POST',
    })
    .then(async response => {
      const r = await response.text();
      console.log(r);
      var blob = new Blob([r], { type: "text/json;charset=utf-8" });
      FileSaver.saveAs(blob, "download.csv");
    });
  }

  // Perform cleanups in this function
  async destroy(props) {
    console.log('+++++++++++++++++');
    console.log(props);
    console.log('+++++++++++++++++');
  }
}

// Add the class to the Altair plugins object
window.AltairGraphQL.plugins.ActionButtonJsonToCSV = ActionButtonJsonToCSV;
