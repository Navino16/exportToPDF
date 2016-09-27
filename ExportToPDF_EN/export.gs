function isInTab(i, sheets_export) {
  if (sheets_export[1] == "all")                                                                                  // Check if the second value of "sheets_export" is "all". If Yes :
    return (0);                                                                                                     // Return 0 at the previous function
  for (var j = 0; j < sheets_export.length; j++) {                                                                // Loop until all the values in "sheets_export" have not been covered
    if (i == sheets_export[j])                                                                                      // Checks if "i" is equal of the value curent value of "sheets_export". If yes :
      return (0);                                                                                                     // Return 0 at the previous function
  }
}

function exportToPDF(sheets_export) {
  for (var i = 0; i < sheets.length; i++) {                                                                       // Loop until all the sheets have not been covered
    if (isInTab(i, sheets_export) === 0)                                                                            // Call the function "isInTab" and check if the return is 0. If yes :
      sheets[i].showSheet();                                                                                          // Show in the spreadsheet the curent sheet
    else                                                                                                            // else
      sheets[i].hideSheet();                                                                                          // Hide in the spreadsheet the curent sheed
  }
  var parents = DriveApp.getFileById(ss.getId()).getParents();                                                    // Get the folder of the file
  if (parents.hasNext())
    var folder = parents.next();
  else
    folder = DriveApp.getRootFolder();
  var pdf = DriveApp.getFileById(ss.getId()).getAs('application/pdf');                                            // Convert all sheets stay active in PDF
  pdf = pdf.setName(sheets_export[0]);                                                                            // Set the PDF name with the name written in the textarea in the HTML page
  folder.createFile(pdf);                                                                                         // Save the PDF file in the same folder as the file
  for (i = 0; i < sheets.length; i++) {                                                                           // Loop until all the sheets have not been covered
    sheets[i].showSheet();                                                                                          // Show in the spreadsheet the curent sheet
  }
  ui.alert("The PDF file is stored in the "+ folder + " folder whit the name \"" + sheets_export[0] + "\"");      // Opens a pop-up window to tell where the file is stored and its name
}

// Made by JAUNET Nathan. Started September 26, 2016 and ended September 27, 2016
// Last Update on 09/27/16
