const { SpecReporter, StacktraceOption} = require('jasmine-spec-reporter');

jasmine.getEnv().clearReporters();               // Enlève le reporter par défaut
jasmine.getEnv().addReporter(new SpecReporter({  // Ajoute un reporter plus verbeux
  spec: {
    displayPending: true,
    displayDuration: true,
    displayStacktrace: StacktraceOption.ALL,    // Affiche les traces d'erreur de façon lisible
    displaySuccessful: true,                    // Affiche les tests réussis
    displayFailed: true,                        // Affiche les tests échoués
    displayErrorMessages: true                  // Affiche les messages d'erreur,
  },
},
  ))
