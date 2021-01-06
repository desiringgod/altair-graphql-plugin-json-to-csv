# JSON to CSV Altair Plugin




### Development Steps

1. Download and Open the Altair GraphQL Client
2. Open the settings modal
3. Toggle "ON" the "Enable experimental features in Altair. Note: The features might be unstable"
4. Add "url:altair-graphql-plugin-json-to-csv@0.6.0::[url]->[http://localhost:8002]" to the plugins list and hit "Save" at the bottom of the settings modal
NOTE: The cache can be finicky, so you may need to update the port number in your package.json file and in the settings.
5. Add {"json-csv-email": "yourname@example.com"} to the variables input
6. Click "Download CSV"

