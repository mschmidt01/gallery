<template>
    <div class="row">
        <div class="col-md-9 col-md-offset-1">
            <p>
                Beim &Uuml;ben  hilft der eingebaute Trainer.
                Er erzeugt Muster und die Aufgabe ist, diese Muster selbst zu programmieren.
                Auf Knopfdruck pr&uuml;ft er, ob die Vorgabe tats&auml;chlich erf&uuml;llt wurde.
                Die Muster sind in sogenannten <em>Levels</em> nach zunehmendem Niveau organisiert.
                Die Abk&uuml;rzungen bei einigen Namen bedeuten:
            </p>
            <ul>
                <li>F?: Variable Form, d. h. beim mehrfachen Aufruf von Mustern in diesem Niveau kann sich die Form &auml;ndern.</li>
                <li>BG: Eine Form wird als Hintergrund (<em>background</em>) verwendet. </li>
            </ul>
            <p>
                Im folgenden sind zu einigen Mustern kurze Infos zusammengestellt.
            </p>

            <h3>ALL_SYMBOLS</h3>
            <div class="row">
                <div class="col-md-3">
                    <img src="images/pattern/all_symbols.png" class="topicImage">
                </div>
                <div class="col-md-9">
                    Hier werden alle vorhandenen Symbole jeweils einmal verwendet.
                    Das ist nicht unbedingt spannend zum Nachprogrammieren und soll eher die Auswahl zeigen.
                </div>
            </div>

            <h3>SIZES</h3>
            <div class="row">
                <div class="col-md-3">
                    <img src="images/pattern/sizes.png" class="topicImage">
                </div>
                <div class="col-md-9">
                    In diesem Muster wird die Ver&auml;nderung der Symbolgr&ouml;&szlig;e verwendet.
                    Dabei werden Symbole entlang der Diagonalgen verwendet.
                    Die Gr&ouml;&szlig;e geht dabei von 0 bis 0,5 (also von unsichtbar bis normal) in gleichgro&szlig;en Schritten.
                </div>
            </div>

            <h3>LETTERTREE</h3>
            <div class="row">
                <div class="col-md-3">
                    <img src="images/pattern/lettertree.png" class="topicImage">
                </div>
                <div class="col-md-9">
                    Hier wird BoS nur zur Darstellung von Texten benutzt.
                    Jede Textzeile ist ein Text im Symbol in der Mitte.
                    Tipp:
                    Formen auf <em>none</em> und dann <em>text2(N/2, y, "....")</em> wobei <em>y</em> von 1 bis N-2 l&auml;uft (bzw. umgekehrt).
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {}
</script>