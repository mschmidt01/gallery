<template>
    <div class="row">
        <div class="col-md-9 col-md-offset-1">
            <h3>Implementierung der BoS-Funktionen in JS</h3>
            in der Tabelle sind f&uuml;r BoS-Live alle BoS-Funktionen
            mit ihrem aktuellen Implementierungsstand aufgef&uuml;hrt.
            Dabei bedeutet: <br>
            <span class="glyphicon glyphicon-ok"></span> implememtiert,
            <span class="glyphicon glyphicon-time"></span> in Arbeit,
            <span class="glyphicon glyphicon-remove-sign"></span> nicht geplant,
            <span class="glyphicon glyphicon-question-sign"></span> unklar


            <table  class="table table-bordered table-hover table-condensed">
                <thead>
                <tr><th>Funktion </th><th>Beschreibung </th><th>Status</th></tr>
                </thead>
                <tr><td>abfragen(  ) </td><td> holt die &auml;lteste Eingabe </td>
                    <td class="text-center"><span class="glyphicon glyphicon-question-sign"></span></td></tr>
                <tr><td>farbe( int, int ) </td><td> wie farbe2</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
                <tr><td>farbe2( int, int, int ) </td><td> Farbe f&uuml;r angegebenes Symbol</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></span></td></tr>
                <tr><td>farben( int ) </td><td> Alle Symbole erhalten neue Farbe</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></span></td></tr>
                <tr><td>flaeche( int ) </td><td> Die gesamte Fl&auml;che wird gef&auml;rbt</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></span></td></tr>
                <tr><td>form( int, String ) </td><td> wie form2</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
                <tr><td>form2( int, int, String ) </td><td> Form f&uuml;r angegebenes Symbol</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></span></td></tr>
                <tr><td>formen( String ) </td><td> Alle Symbole erhalten neue Form</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></span></td></tr>
                <tr><td>grau( int, int ) </td><td> wie grau2</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
                <tr><td>grau2( int, int, int ) </td><td> Grauwert f&uuml;r angegebenes Symbol</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
                <tr><td>groesse( int, int ) </td><td> neue Gr&ouml;&szlig;e f&uuml;r das Brett</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></td></tr>
                <tr><td>hintergrund( int, int ) </td><td> wie hintergrund2</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
                <tr><td>hintergrund2( int, int, int ) </td><td> Hintergrundfarbe f&uuml;r angegebenes Symbol</td>
                    <td class="text-center"><span class="glyphicon glyphicon-time"></span></td></tr>
                <tr><td>loeschen(  ) </td><td> l&ouml;scht (fast) alle Farb-Einstellungen</td>
                    <td class="text-center"><span class="glyphicon glyphicon-time"></span></td></tr>
                <tr><td>rahmen( int ) </td><td> Farbe des Rahmens</td>
                    <td class="text-center"><span class="glyphicon glyphicon-time"></span></td></tr>
                <tr><td>statusText( String ) </td><td> Text f&uuml;r die Statuszeile</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></span></td></tr>
                <tr><td>symbolGroesse( int, double ) </td><td> wie symbolGroesse2</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
                <tr><td>symbolGroesse2( int, int, double ) </td><td> Gr&ouml;&szlig;e f&uuml;r angegebenes Symbol</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></span></td></tr>
                <tr><td>text( int, String ) </td><td> wie text2</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
                <tr><td>text2( int, int, String ) </td><td> Text f&uuml;r angegebenes Symbol</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></span></td></tr>
                <tr><td>textFarbe( int, int ) </td><td> wie textFarbe2</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
                <tr><td>textFarbe2( int, int, int ) </td><td> Textfarbe f&uuml;r angegebenes Symbol</td>
                    <td class="text-center"><span class="glyphicon glyphicon-ok"></span></td></tr>
                <tr><td>zeichen( int, char ) </td><td> wie zeichen2</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
                <tr><td>zeichen2( int, int, char ) </td><td> Ein Zeichen (char) als Text f&uuml;r angegebenes Symbol</td>
                    <td class="text-center"><span class="glyphicon glyphicon-remove-sign"></span></td></tr>
            </table>
        </div>
    </div>
</template>
<script>
    export default {}
</script>