try {                                                                                                           // Try following code :
  var ss = SpreadsheetApp.getActiveSpreadsheet();                                                                 // Get active Spreadsheet
  var sheets = ss.getSheets();                                                                                    // Get all the sheets in the SpreadSheet
  var ui = SpreadsheetApp.getUi();                                                                                // Get the spreadsheet user interface
} catch(e) {                                                                                                    // If something go wrong :
  Logger.log(e.message);                                                                                        // Prompt the error message in log
}

function onInstall() {                                                                                          // When the script is installed
  onOpen();                                                                                                     // Call the function "onOpen"
}

function onOpen() {                                                                                             // When the spreadsheet is opened
  start();                                                                                                      // Call the function "start" to start exporting
}

function start() {
  SpreadsheetApp.getUi().createAddonMenu()                                                                      // Get the Spreadsheet user interface and create a sub-menu in Add-on menu
  .addItem('Export To PDF', 'choice')                                                                           // Add item named "Export To PDF" and call the function "choice"
  .addSeparator()                                                                                               // Add a separator
  .addItem('Help', 'help')                                                                                      // Add item named "Help" and call the function "help"
  .addToUi();                                                                                                   // Add the menu to UI
}

function getListSheet() {
  var tab = [];                                                                                                 // Defined an array variable named "tab".
  for (var i = 0; i < sheets.length; i++) {                                                                     // Loop until all the sheets have not been covered
    tab[i] = sheets[i].getName();                                                                                  // Set in tab[i] the name of current sheet
  }
  return (tab);                                                                                                 // Return the array at the previous function
}

function getName() {
  return (ss.getName());                                                                                        // Get the name of the SpreadSheet and return it to the previous function
}

// Made by JAUNET Nathan. Started September 26, 2016 and ended September 27, 2016
// Last Update on 10/05/16
