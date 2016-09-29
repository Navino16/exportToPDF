var ss = SpreadsheetApp.getActiveSpreadsheet();                                                                 // Récupère le fichier auquel est rattaché le script
var sheets = ss.getSheets();                                                                                    // Récupère toutes les feuilles du fichier
var ui = SpreadsheetApp.getUi();                                                                                // Récupère l'interface utilisateur

function onOpen() {                                                                                             // Fonction appelée quand le fichier s'ouvre
  start();                                                                                                      // Appel la fonction "Start"
}

function start() {
  ui.createMenu('Exporter en PDF')                                                                              // Créé un menu nommé "Exporter en PDF"
  .addItem('Exporter en PDF', 'choice')                                                                         // Ajoute un objet nommé "Exporter en PDF" et qui appelle la fonction "choice" lorsque l'on clique dessus
  .addSeparator()                                                                                               // Ajoute un séparateur
  .addItem('Aide', 'help')                                                                                      // Ajoute un objet nommé "Aide" et qui appelle la fonction "help" lorsque l'on clique dessus
  .addToUi();                                                                                                   // Ajoute le menu à l'interface utilisateur
}

function getListSheet() {
  var tab = [];                                                                                                 // Défini une variable de type tableau nommée "tab".
  for (var i = 0; i < sheets.length; i++) {                                                                     // Boucle tant que toutes les feuilles n'ont pas été parcourue
    tab[i] = sheets[i].getName();                                                                               // Stock dans tab[i] le nom de la feuille actuelle
  }
  return (tab);                                                                                                 // Retourne le tableau à la fonction précédente
}

function getName() {
  return (ss.getName());                                                                                        // Récupère le nom de la feuille et le retourne à la fonction précédente
}

// Fait par JAUNET Nathan. Commencé le 26 septembre 2016 et terminé le 27 septembre 2016
// Dernière mise à jour le 29/09/2016
