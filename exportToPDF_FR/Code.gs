try {                                                                                                           // Essaye les instructions si dessous :
  var ss = SpreadsheetApp.getActiveSpreadsheet();                                                                 // Récupère le fichier auquel est rattaché le script
  var sheets = ss.getSheets();                                                                                    // Récupère toutes les feuilles du fichier
  var ui = SpreadsheetApp.getUi();                                                                                // Récupère l'interface utilisateur
} catch (e) {                                                                                                   // Si il y a une erreur execute le code ci-dessous puis continu le script :
  Logger.log(e.message);                                                                                          // Affiche dans la console le message d'erreur
}

function onInstall() {                                                                                          // Fonction appellé quand le module s'installe
  onOpen();                                                                                                     // Appel la fonction "onOpen"
}

function onOpen() {                                                                                             // Fonction appelée quand le fichier s'ouvre
  start();                                                                                                      // Appel la fonction "Start"
}

function start() {
  SpreadsheetApp.getUi().createAddonMenu()                                                                      // Récupère l'interface utilistaeur du document et y créer un sous-menu dans le menu add-on
  .addItem('Exporter en PDF', 'choice')                                                                         // Ajoute un objet nommé "Exporter en PDF" et qui appelle la fonction "choice" lorsque l'on clique dessus
  .addSeparator()                                                                                               // Ajoute un séparateur
  .addItem('Aide', 'help')                                                                                      // Ajoute un objet nommé "Aide" et qui appelle la fonction "help" lorsque l'on clique dessus
  .addToUi();                                                                                                   // Ajoute le menu à l'interface utilisateur
}

function naturalCompare(a, b) {                                                                                 // Fonction de trie où les suites de nombres sont traités en un nombre unique et non pas des nombres différents
  var ax = [], bx = [];
  a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
  b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });
  while(ax.length && bx.length) {
    var an = ax.shift();
    var bn = bx.shift();
    var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
    if(nn) return nn;
  }
  return ax.length - bx.length;
}

function getListSheet() {
  var tab = [];                                                                                                 // Défini une variable de type tableau nommée "tab".
  for (var i = 0; i < sheets.length; i++) {                                                                     // Boucle tant que toutes les feuilles n'ont pas été parcourue
    tab[i] = sheets[i].getName();                                                                               // Stock dans tab[i] le nom de la feuille actuelle
  }
  tab.sort(naturalCompare);                                                                                     // Trie le tableau avec la fonction de trie "naturalCompare"
  return (tab);                                                                                                 // Retourne le tableau à la fonction précédente
}

function getName() {
  return (ss.getName());                                                                                        // Récupère le nom de la feuille et le retourne à la fonction précédente
}

// Fait par JAUNET Nathan. Commencé le 26 septembre 2016 et terminé le 27 septembre 2016
// Dernière mise à jour le 14/11/2016
