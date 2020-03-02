<template>

    <div>
        <h1 class="title">Über BoS</h1>
        <section>
            <h2>Q&A</h2>
            <p>
                <strong>Hat die Bewertung der Bilder Einfluss auf Noten?</strong><br>
                Nein.
            </p>
            <p>
                <strong>Wie kann man weitere Bilder einbauen?</strong><br>
                Email an <a href="mailto:Stephan.Euler@mnd.thm.de">Stephan.Euler@mnd.thm.de</a>
            </p>
        </section>
        <section>
            <h2>Implementierte BoS-Funktionen in JS</h2>
            <p>in der Tabelle sind f&uuml;r BoS-Live alle BoS-Funktionen
                mit ihrem aktuellen Implementierungsstand aufgef&uuml;hrt.
                Dabei bedeutet:</p>
            <p>
                <i class="fas fa-check"></i> implementiert,
                <i class="fas fa-hourglass-half"></i> in Arbeit,
                <i class="fas fa-times"></i> nicht geplant,
                <i class="fas fa-question"></i> unklar.
            </p>

            <table class="table table-bordered table-hover table-condensed">
                <thead>
                <tr>
                    <th>Funktion</th>
                    <th>Beschreibung</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tr v-for="value in functions">
                    <td>{{value.name}}</td>
                    <td>{{value.description}}</td>
                    <td class="text-center"><i v-bind:class="value.icon"></i></td>
                </tr>
            </table>
        </section>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                functions: [
                    {name: 'abfragen()', description: 'holt die älteste Eingabe', icon: 'fas fa-question'},
                    {name: 'farbe(int, int)', description: 'wie farbe2', icon: 'fas fa-times'},
                    {name: 'farbe2(int, int, int)', description: 'Farbe für angegebenes Symbol', icon: 'fas fa-check'},
                    {name: 'farben(int)', description: 'Alle Symbole erhalten neue Farbe', icon: 'fas fa-check'},
                    {name: 'flaeche(int)', description: 'Die gesamte Fläche wird gefärbt', icon: 'fas fa-check'},
                    {name: 'form(int, String)', description: 'wie form2', icon: 'fas fa-times'},
                    {name: 'form2(int, int, String)', description: 'Form für angegebenes Symbol', icon: 'fas fa-check'},
                    {name: 'formen(String)', description: 'Alle Symbole erhalten neue Form', icon: 'fas fa-check'},
                    {name: 'grau(int, int)', description: 'wie grau2', icon: 'fas fa-times'},
                    {
                        name: 'grau2(int, int, int)',
                        description: 'Grauwert für angegebenes Symbol',
                        icon: 'fas fa-times'
                    },
                    {name: 'groesse(int, int)', description: 'neue Größe für das Brett', icon: 'fas fa-check'},
                    {name: 'hintergrund(int, int)', description: 'wie hintergrund2', icon: 'fas fa-times'},
                    {
                        name: 'hintergrund2(int, int, int)',
                        description: 'Hintergrundfarbe für angegebenes Symbol',
                        icon: 'fas fa-hourglass-half'
                    },
                    {
                        name: 'loeschen()',
                        description: 'löscht (fast) alle Farb-Einstellungen',
                        icon: 'fas fa-hourglass-half'
                    },
                    {name: 'rahmen(int)', description: 'Farbe des Rahmens', icon: 'fas fa-hourglass-half'},
                    {name: 'statusText(String)', description: 'Text für die Statuszeile', icon: 'fas fa-check'},
                    {name: 'symbolGroesse(int, double)', description: 'wie symbolGroesse2', icon: 'fas fa-times'},
                    {
                        name: 'symbolGroesse2(int, int, double)',
                        description: 'Größe für angegebenes Symbol',
                        icon: 'fas fa-check'
                    },
                    {name: 'text(int, String)', description: 'wie text2', icon: 'fas fa-times'},
                    {name: 'text2(int, int, String)', description: 'Text für angegebenes Symbol', icon: 'fas fa-check'},
                    {name: 'textFarbe(int, int)', description: 'wie textFarbe2', icon: 'fas fa-times'},
                    {
                        name: 'textFarbe2(int, int, int)',
                        description: 'Textfarbe für angegebenes Symbol',
                        icon: 'fas fa-check'
                    },
                    {name: 'zeichen(int, char)', description: 'wie zeichen2', icon: 'fas fa-times'},
                    {
                        name: 'zeichen2(int, int, char)',
                        description: 'Ein Zeichen (char) als Text für angegebenes Symbol',
                        icon: 'fas fa-times'
                    },
                ]
            }
        }
    }
</script>
