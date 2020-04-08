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

console.log('%c The altair-graphql-plugin-json-to-csv package was loaded.', 'background: #aed; color: #ffffff; display: block; padding: 7px 3px; font-weight: bold; border-left: 10px solid #1d1c1a');

// Add the class to the Altair plugins object
window.AltairGraphQL.plugins.ActionButtonJsonToCSV = ActionButtonJsonToCSV;
