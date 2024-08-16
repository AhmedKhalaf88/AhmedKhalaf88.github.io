function updateContentToDE() {
  document.querySelector("#aboutNav").textContent = "Über Mich";
  document.querySelector("#aboutNav").title = "Über Mich";
  document.querySelector("#skillNav").textContent = "Kenntnisse";
  document.querySelector("#skillNav").title = "Kenntnisse";
  document.querySelector("#experienceNav").textContent = "Erfahrung";
  document.querySelector("#experienceNav").title = "Erfahrung";
  document.querySelector("#educationNav").textContent = "Ausbildung";
  document.querySelector("#educationNav").title = "Ausbildung";
  document.querySelector("#contentNav").textContent = "Kontakt";
  document.querySelector("#contentNav").title = "Kontakt";

  document.querySelector("#downloadCVLink").textContent =
    "Lebenslauf herunterladen";
  document.querySelector("#downloadCVLink").href =
    "https://drive.google.com/file/d/1pDG_-J3am5hrHxAZssQUW0a0vPaOaUA9/view?usp=sharing";
  document.querySelector("#hireMeLink").textContent = "Stellen Sie mich ein";

  document.querySelector("#aboutMeTitle").textContent = "Über mich";
  document.querySelector(
    "#aboutmeStatement"
  ).innerHTML = `Begeisterter Frontend-Entwickler mit Wohnsitz in Dresden und nachgewiesener Begabung für schnelles Erlernen von Frontend-Technologien. Aktiv auf der Suche nach Junior-Positionen oder Praktika. Solide Grundkenntnisse in ES6 und React. Leidenschaftlich daran interessiert, mit der Micro-Frontend-Architektur zu arbeiten und entweder Build- oder Laufzeitintegration zwischen Anwendungen anzuwenden.`;
  document.querySelector("#personalDetails").textContent =
    "Persönliche Details";
  document.querySelector("#age").textContent = "Geburtsdatum";
  document.querySelector("#phone").textContent = "Telefon";
  document.querySelector("#address").textContent = "Adresse";

  document.querySelector("#skillsContent").textContent = "Kenntnisse";

  document.querySelector("#experienceTitle").textContent =
    "Berufspraktische Erfahrungen";
  document.querySelector("#workAt1").textContent = "bei manatec GmbH";
  document.querySelector("#workAt2").textContent = "bei Modis GmbH";
  document.querySelector("#workAt3").textContent =
    "bei Industrial Testing & Research Center";
  document.querySelector("#workDate1").textContent =
    "März, 2023 - August, 2023";
  document.querySelector("#workDate2").textContent =
    "Mai, 2021 - Februar, 2023";
  document.querySelector("#workDate3").textContent =
    "November, 2014 - Oktober, 2015";
  document.querySelector("#workDetails1").innerHTML = `<li>
                        Entwickelte maßgeschneiderte Odoo-Module, um spezifische Kundenanforderungen zu erfüllen, und stellte sicher, dass sie mit bestehenden Systemen kompatibel sind und den besten Codierpraktiken entsprechen.
                      </li>
                      <li>
                        Habe mit erfahrenen Entwicklern zusammengearbeitet, um komplexe Probleme im Odoo-Framework zu erkennen und zu beheben, wobei ich Problemlösungsfähigkeiten und einen proaktiven Ansatz zur Bewältigung von Herausforderungen gezeigt habe.
                      </li>
                      <li>
                        Unterstützte bei der Implementierung neuer Funktionen und Features in Odoo-Anwendungen und trug so zur allgemeinen Verbesserung der Benutzerfreundlichkeit und Leistungsfähigkeit der Software bei.
                      </li>
                      <li>
                        Nahm an Code-Reviews und Qualitätskontrollprozessen teil, um hohe Standards für Code-Integrität und Zuverlässigkeit aufrechtzuerhalten, und suchte aktiv nach Feedback, um persönliche Fähigkeiten und Kenntnisse in der Odoo-Entwicklung zu verbessern.
                      </li>`;
  document.querySelector("#workDetails2").innerHTML = ` <li>
                      Hat Endbenutzern zeitnah technische Unterstützung bereitgestellt, um Hardware- und Softwareprobleme effizient zu lösen und Ausfallzeiten zu minimieren.
                    </li>
                    <li>
                      Zeigte ausgeprägte Fähigkeiten im Fehlerbeheben, indem Probleme präzise diagnostiziert und effektive Lösungen implementiert wurden, um die Funktionalität wiederherzustellen.
                    </li>
                    <li>
                      Unterstützte bei der Wartung der IT-Infrastruktur, einschließlich Software-Updates, Systemkonfigurationen und Netzwerkoptimierungen.
                    </li>
                    <li>
                      Hat ausgezeichneten Kundenservice geleistet, indem klare Kommunikation und Benutzerschulung sichergestellt wurden, um wiederkehrende Probleme zu verhindern und die Zufriedenheit der Benutzer zu verbessern.
                    </li>`;
  document.querySelector("#workDetails3").innerHTML = `<li>
                      Bietet zeitnahe technische Unterstützung für Endbenutzer, löst Hardware- und Softwareprobleme effizient, um Ausfallzeiten zu minimieren.
                    </li>
                    <li>
                      Zeigte Kompetenz im Problemlösen, identifizierte und löste Probleme genau, um einen reibungslosen Betrieb der IT-Systeme sicherzustellen.
                    </li>
                    <li>
                      Hat zur Pflege der IT-Vermögenswerte beigetragen, indem Software-Upgrades, Systemkonfigurationen und Netzwerkverbesserungen überwacht wurden.
                    </li>
                    <li>
                      Hat außergewöhnliche Unterstützung für Benutzer bereitgestellt, indem effektive Kommunikation gefördert und Wissen vermittelt wurde, um zukünftige Probleme zu verhindern und die Benutzererfahrung zu verbessern.
                    </li>`;

  document.querySelector("#educationTitle").textContent = "Ausbildung";
  document.querySelector("#bachelorDate").textContent =
    "Oktober, 2007 - Januar, 2013";
  document.querySelector("#bachelorFrom").textContent =
    "von der Universität Damaskus";

  document.querySelector("#courseTitle").textContent = "Kurse";
  document.querySelector("#courseFrom1").textContent = "von Udemy";
  document.querySelector("#courseDate1").textContent = "März, 2024";
  document.querySelector("#courseFrom2").textContent = "von Udemy";
  document.querySelector("#courseDate2").textContent = "November, 2023";
  document.querySelector("#courseName").textContent =
    "Modulare Weiterbildung für IT-Spezialisten";
  document.querySelector("#courseFrom3").textContent = "von Robotron";
  document.querySelector("#courseDate3").textContent = "Januar, 2020";

  document.querySelector("#bankApp").textContent =
    "Banklösungsanwendung, die mit Vanilla JavaScript entwickelt wurde.";
  document.querySelector(
    "#test"
  ).innerHTML = `Zum Testen verwenden Sie diese Konten:
    <div>Konto 1: </div><span>Benutzername: js , passwort: 1111</span>
    <div>Konto 2: </div><span>Benutzername: jd , passwort: 2222</span>`;
  document.querySelector("#guessGame").textContent =
    "Ein Spiel, das mit Vanilla JavaScript entwickelt wurde.";
  document.querySelector("#PigGame").textContent =
    "Ein Spiel, das mit Vanilla JavaScript entwickelt wurde.";
  document.querySelector("#usepopcorn").textContent =
    "Diese App, entwickelt mit React, ermöglicht es Ihnen, nach Filmen zu suchen, sie zu bewerten und zu Ihrer Liste gesehener Filme hinzuzufügen";
  document.querySelector("#billSplit").textContent =
    "Diese App, entwickelt mit React, ermöglicht es Ihnen, die Rechnung mit Ihren Freunden aufzuteilen.";
  document.querySelector("#travelList").textContent =
    "Diese App, die mit React entwickelt wurde, ermöglicht es Ihnen, eine Liste von Reiseartikeln zu erstellen.";
  document.querySelector("#leonDesign").textContent =
    "Dieses Design wurde mit HTML und CSS erstellt.";
  document.querySelector("#weather").textContent =
    "Diese React-App ermöglicht es Ihnen, einfach das aktuelle Wetter zu überprüfen und Sie über die neuesten Bedingungen informiert zu bleiben.";

  document.querySelector("#contactTitle").textContent = "Kontakt";
}
