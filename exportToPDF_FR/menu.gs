function choice() {
  var html = HtmlService.createHtmlOutputFromFile('choice')                                                  // Créé la page HTML nommée "interface"
  .setWidth(570)                                                                                             // Défini la largeur
  .setHeight(160);                                                                                           // Défini la hauteur
  ui.showModalDialog(html, "Exporter en PDF");                                                               // Montre la page HTML dans une fenêtre pop-up avec le nom "Exporter en PDF"
}

function help() {
  var html = HtmlService.createHtmlOutputFromFile('help')                                                    // Créé la page HTML nommée "help"
  .setTitle('Aide')                                                                                          // Défini le nom de la fenêtre pop-up
  .setWidth(300);                                                                                            // Défini sa largeur
  ui.showSidebar(html);                                                                                      // Montre la page HTML dans une fenêtre sur le côté du document
}

// Fait par JAUNET Nathan. Commencé le 26 septembre 2016 et terminé le 27 septembre 2016
// Dernière mise à jour le 27/09/2016
