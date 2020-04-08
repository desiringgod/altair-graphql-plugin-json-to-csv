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
