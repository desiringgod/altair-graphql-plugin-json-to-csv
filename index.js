class ActionButtonJsonToCSV {
  constructor(props) { }

  // Called to retrieve the render information for the button.
  // Currently only the text of the button is required.
  async render(props) {
    return {
      text: 'Download/Export as CSV'
    };
  }

  // Called when the action button is clicked
  async execute(props) {
    alert('This is the action executed when the button clicked');
  }

  // Perform cleanups in this function
  async destroy(props) { }
}

// Add the class to the Altair plugins object
window.AltairGraphQL.plugins.ActionButtonJsonToCSV = ActionButtonJsonToCSV;
