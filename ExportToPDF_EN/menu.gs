function choice() {
  var html = HtmlService.createTemplateFromFile('choice').evaluate()                                         // Create the HTML page named "choice"
  .setSandboxMode(HtmlService.SandboxMode.NATIVE)                                                            // Sandbox for protect user
  .setWidth(700)                                                                                             // Set the width
  .setHeight(270);                                                                                           // Set the height
  ui.showModalDialog(html, " ");                                                                             // Show the HTML page in a pop-up window with the name " "
}

function help() {
  var html = HtmlService.createTemplateFromFile('help').evaluate()                                           // Create the HTML page named "help"
  .setSandboxMode(HtmlService.SandboxMode.NATIVE)                                                            // Sandbox for protect user
  .setTitle('Help')                                                                                          // Set the name of the pop-up window
  .setWidth(300);                                                                                            // Set the width
  ui.showSidebar(html);                                                                                      // Show the HTML page in a sidebar
}

// Made by JAUNET Nathan. Started September 26, 2016 and ended September 27, 2016
// Last Update on 10/05/16
