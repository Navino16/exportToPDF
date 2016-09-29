function choice() {
  var html = HtmlService.createTemplateFromFile('choice').evaluate()                                         // Creation de la page HTML "choice"
  .setSandboxMode(HtmlService.SandboxMode.NATIVE)                                                            // Restrictions pour la page HTML (protège l'utilisateur)
  .setWidth(700)                                                                                             // Définition de sa largeur
  .setHeight(270);                                                                                           // Défini la hauteur
  ui.showModalDialog(html, " ");                                                                             // Montre la page HTML dans une fenêtre pop-up avec le nom " "
}

function help() {
  var html = HtmlService.createTemplateFromFile('help').evaluate()                                           // Création de la page HTML "help"
  .setSandboxMode(HtmlService.SandboxMode.NATIVE)                                                            // Restrictions pour la page HTML (protège l'utilisateur)
  .setTitle('Aide')                                                                                          // Définition du nom de la page
  .setWidth(300);                                                                                            // Définition de sa largeur
  ui.showSidebar(html);                                                                                      // Affiche la page html dans une sidebar
}

// Fait par JAUNET Nathan. Commencé le 26 septembre 2016 et terminé le 27 septembre 2016
// Dernière mise à jour le 29/09/2016
