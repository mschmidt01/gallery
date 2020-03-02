<template>
    <div>
        <h1 class="title">Trainer Muster</h1>
        <section>
            <p>Beim &Uuml;ben hilft der eingebaute Trainer.
                Er erzeugt Muster und die Aufgabe ist, diese Muster selbst zu programmieren.
                Auf Knopfdruck pr&uuml;ft er, ob die Vorgabe tats&auml;chlich erf&uuml;llt wurde.
                Die Muster sind in sogenannten <em>Levels</em> nach zunehmendem Niveau organisiert.
                Die Abk&uuml;rzungen bei einigen Namen bedeuten:</p>
            <ul>
                <li>F?: Variable Form, d. h. beim mehrfachen Aufruf von Mustern in diesem Niveau kann sich die Form
                    &auml;ndern.
                </li>
                <li>BG: Eine Form wird als Hintergrund (<em>background</em>) verwendet.</li>
            </ul>
            <p>
                Im folgenden sind zu einigen Mustern kurze Infos zusammengestellt.
            </p>
            <div class="mt-5" v-for="value in items">
                <h3>{{ value.title }}</h3>
                <div class="row">
                    <div class="col-md-4 col-lg-3">
                        <img class="pattern" v-bind:src="value.picture">
                    </div>
                    <div class="col-md-8 col-lg-9">
                        <p>{{value.description}}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                items: [
                    {
                        title: 'ALL_SYMBOLS',
                        picture: '/img/pattern/all_symbols.png',
                        description: 'Hier werden alle vorhandenen Symbole jeweils einmal verwendet.\n' +
                            '                    Das ist nicht unbedingt spannend zum Nachprogrammieren und soll eher die Auswahl zeigen.'
                    },
                    {title: 'SIZES', picture: '/img/pattern/sizes.png', description: 'In diesem Muster wird die Veränderung der Symbolgröße verwendet. Dabei werden Symbole entlang der Diagonalgen verwendet. Die Größe geht dabei von 0 bis 0,5 (also von unsichtbar bis normal) in gleichgroßen Schritten.'},
                    {title: 'LETTERTREE', picture: '/img/pattern/lettertree.png', description: 'Hier wird BoS nur zur Darstellung von Texten benutzt. Jede Textzeile ist ein Text im Symbol in der Mitte. Tipp: Formen auf none und dann text2(N/2, y, "....") wobei y von 1 bis N-2 läuft (bzw. umgekehrt).'}
                ]
            }
        }
    }
</script>

<style scoped>
    .pattern {
        max-width: 220px;
    }
</style>
