# Der Kopfrechner

## Über das Projekt

Mein Projekt hat nicht viel mit meiner Bachelorareit zu tun, zumal ich zu dieser Zeit noch keine Idee bezüglich meines Bachelorthemas hatte. Trotzdem wollte ich etwas basteln, das Spass macht!

Mein Projekt befasst sich mit Gamification Ansätzen für Primarschüler der 1. bis zur 6. Klasse, ist aber ebenso eine gute Rechenübung für ältere Semester. 

Es ist ein Spiel, welches einen kreativen Zugang zu einfachen mathematischen Grundkenntnissen ermöglicht.

Die Idee ist es, den User*innen die Funktionalitäten eines Taschenrechners aufzuzeigen, ohne sie alles mit dem Taschenrechner rechnen zu lassen. So verstehen sie besser, wie hilfreich ein Taschenrechner sein kann und gleichzeitig erlernen sie das Kopfrechnen

Der Fokus des Projekts lag auf der Javascript-Funktionalität des Taschenrechners. Ich wollte spezifisch eine simple Logikanwendung kreieren und habe mich bewusst gegen eine konventionelle Webseite entschieden. Von denen gibts schon genug.

## Wie funktionierts?

Im Grunde wird jede Runde eine Zielzahl generiert. Die Aufgabe ist es, eine Rechnung herauszufinden, welche als Resultat die Zielzahl herausspuckt. In dieser Rechnung müssen der Operator sowie die generierte Schlüsselzahl verwendet werden. Diese Schlüsselzahl kann zwischen 10 und 20 sein. Die Rechnung muss in den Taschenrechner eingetippt werden. Ergibt die eingegebene Rechnung die Zielzahl, berücksichtigt die Schlüsselzahl und verwendet mindestens einmal den verlangten Operator, ist die Runde erfolgreich beendet. In der Zwischenzeit werden alle falschen Rechnungsversuche in der Liste rechts aufgelistet, so dass du auch ja nicht vergisst, welche Rechnungen du schon einmal probiert hast. Noch Fragen? Nein? Dann viel Spass!

## Eingabe

Die Eingabe erfolgt mittels Drücken der VIRTUELLEN TASTEN oder des NUMPAD auf der Tastatur.
Mit den Tasten +, -, * und / werden die Operatoren eingeloggt. 
Mit ENTER wird das Resultat eingeloggt.
Mit BACKSPACE wird das Eingabefeld zurückgesetzt. 

## Entstehungsprozess

Der Entstehungsprozess war sehr lehrreich. Ich programmierte grösstenteils mit Chat GPT 4. Angefangen beim HTML Code, dann sehr schnell Javascript. Das Styling mit CSS machte ich erst ganz am Schluss. Die konkrete Gamificationidee kam erst nach dem ersten Progammieren des Taschenrechners zustande. Diese baute ich dann nach einigen Versuchen aus, da ich gemerkt habe, dass das System ziemlich schnell auszutricksen ist. Erst, wenn eine Schlüsselzahl sowie ein Operator im Spiel zu berücksichtigen sind, wird die Sache knifflig. 

## Herausforderungen

Eine Herausforderung war bestimmt die Logik. Dabei haben mir aber Skizzen geholfen, in denen ich verschiedene Möglichkeiten ausformulierte, wie die Rechnungen entstehen können. Durch die Logik musste ich mich intensiv mit Javascript auseinandersetzen. Das war auch nicht immer leicht, da die Funktionen nicht immer einfach zu verstehen und nachzubauen sind. Speziell mit Variabeln, welche als Parameter in einer Funktion mitgegeben werden, hatte ich lange Mühe. Das Prinzip habe ich jetzt aber verstanden.
Nebst dem war die Überprüfung der Rechnung eine Schwierigkeit, da sie relativ viele Bedingungen erfüllen musste. Die Speicherung der Fehlversuche in eine Liste konnte mit einem leeren Array, welches mit einem forEach-Loop befüllt wird, gelöst werden. Die Funktionalität, dass die Zahlen und Operatoren etc. mit der Tastatur bedient werden können, verkomplizierte den Javascript-Code noch weiter. Zum Schluss sollten die Tasten mithilfe von Javascript auch noch ihre CSS Attribute verändern. So nahm die ganze Sache zum Schluss eine userfreundlichere und visuell ansprechendere Form an und gab dem benutzer ein visuelles Feedback.

## Weitere Schritte
Als Ausbaumöglichkeit sehe ich klar ein Scoreboard mit einer Datenbank zum Beispiel oder einen Counter für die erfolgreichen Versuche mithilfe des Localstorage. Auch ein Countdown für den extra Nervenkitzel wäre schön gewesen. Für das hat die Zeit aber leider nicht mehr gereicht.

## Quellen

- Chat-GPT 4
- W3 Schools
- GitHub CoPilot
- jsfiddle.net





