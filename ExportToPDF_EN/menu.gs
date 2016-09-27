function choice() {
  var html = HtmlService.createHtmlOutputFromFile('choice')                                                  // Create the HTML page named "interface"
  .setWidth(570)                                                                                             // Set the width
  .setHeight(160);                                                                                           // Set the height
  ui.showModalDialog(html, "Export to PDF");                                                                 // Show the HTML page in a pop-up window with the name "Export to PDF"
}

function help() {
  var html = HtmlService.createHtmlOutputFromFile('help')                                                    // Create the HTML page named "help"
  .setTitle('Help')                                                                                          // Set the name of the pop-up window
  .setWidth(300);                                                                                            // Set the width
  ui.showSidebar(html);                                                                                      // Show the HTML page in a sidebar
}

// Made by JAUNET Nathan. Started September 26, 2016 and ended September 27, 2016
// Last Update on 09/27/16
