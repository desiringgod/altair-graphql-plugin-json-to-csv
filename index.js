// import FileSaver from 'file-saver';

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
        const csvOutput = await response.text();
        console.log({ csvOutput });

        const element = document.createElement('a');
        const filename = 'download.csv';
        element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvOutput));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      });
  }

  // Perform cleanups in this function
  async destroy(props) {}
}

// Add the class to the Altair plugins object
window.AltairGraphQL.plugins.ActionButtonJsonToCSV = ActionButtonJsonToCSV;
