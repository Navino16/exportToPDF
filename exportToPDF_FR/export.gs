function isInTab(i, sheets_export) {
  if (sheets_export[1] == "all")                                                                                  // Regarde si la deuxième valeur de "sheets_export" est "all". Si oui :
    return (0);                                                                                                     // Retourne 0 à la fonction précédente
  for (var j = 0; j < sheets_export.length; j++) {                                                                // Boucle tant que toutes les valeurs dans "sheets_export" n'ont pas été parcourues
    if (i == sheets_export[j])                                                                                      // Vérifie si "i" est égal à la valeur actuelle de "sheets_export". Si oui :
      return (0);                                                                                                     // Retourne 0 à la fonction précédente
  }
  return (1);                                                                                                     // Retourne 1 à la fonction précédente
}

function exportToPDF(sheets_export) {
  for (var i = 0; i < sheets.length; i++) {                                                                       // Boucle tant que toutes les feuilles n'ont pas été parcourue
    if (isInTab(i, sheets_export) === 0)                                                                            // Appel la fonction "isInTab" et vérifie si elle à retournée 0. Si oui :
      sheets[i].showSheet();                                                                                          // Affiche dans le fichier la feuille actuelle
    else                                                                                                            // sinon
      sheets[i].hideSheet();                                                                                          // Cache dans le fichier la feuille actuelle
  }
  var parents = DriveApp.getFileById(ss.getId()).getParents();                                                    // Récupère le dossier où est stocké le fichier
  if (parents.hasNext())
    var folder = parents.next();
  else
    folder = DriveApp.getRootFolder();
  var pdf = DriveApp.getFileById(ss.getId()).getAs('application/pdf');                                            // Converti toutes les feuilles restées actives en un fichier PDF
  pdf = pdf.setName(sheets_export[0]);                                                                            // Défini le nom du PDF avec le nom écris dans la zone de texte de la page HTML
  folder.createFile(pdf);                                                                                         // Sauvegarde le fichier PDF dans le même dossier que le fichier
  for (i = 0; i < sheets.length; i++) {                                                                           // Boucle tant que toutes les feuilles n'ont pas été parcourue
    sheets[i].showSheet();                                                                                          // Affiche dans le fichier la feuille actuelle
  }
  ui.alert("The PDF file is stored in the "+ folder + " folder whit the name \"" + sheets_export[0] + "\"");      // Ouvre une fenêtre pop-up pour indiquer où le fichier est stocker et son nom
}

// Fait par JAUNET Nathan. Commencé le 26 septembre 2016 et terminé le 27 septembre 2016
// Dernière mise à jour le 27/09/2016
