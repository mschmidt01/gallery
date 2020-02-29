<template>
    <div class="container">
        <h1 class="title">Code-Snippets</h1>
        <section>
            <p>Hier sind einige Beispiele für die Live-Version zusammengestellt. Die Programmiersprache ist JavaScript.
                Die Beispiele funktioniert in BoS-Live, aber nur teilweise im JS Mode in BoS. Der in Java eingebaute
                JS-Interpreter unterstützt den aktuellen JS-Standard nicht vollständig.</p>
            <p>Auf der Suche nach einem bestimmten Snippet? Dann wähle hier das passende aus.</p>
            <div v-for="value in items">
                <a v-bind:href="'#'+ value.title">{{value.title}}</a>
            </div>

            <div v-for="value in items" v-bind:id="value.title">
                <h2>{{ value.title }}</h2>
                <pre>
                    <code>
{{value.code}}
                    </code>
                </pre>
            </div>
        </section>
    </div>


</template>
<script>
    export default {
        data: function () {
            return {
                items: [
                    {title: 'Zufall', code: '' +
                            'const n = 16;\n' +
                            'groesse( n, n );\n' +
                            'flaeche( LAVENDERBLUSH )\n' +
                            '\n' +
                            'for(var x=0; x<n; x++ ) {\n' +
                            '\tfor( var y=0;y<n; y++ ) {\n' +
                            '\t\tvar r = Math.floor(Math.random() * 255);\n' +
                            '\t\tvar g = Math.floor(Math.random() * 255);\n' +
                            '\t\tvar b = Math.floor(Math.random() * 255);\n' +
                            '\t\tfarbe2(    x, y, "rgb(" + r + "," + g + "," + b + ")" )\n' +
                            '\t}\n' +
                            '}'
                    },
                    {title: 'Rahmen', code: 'var n = 12;\n' +
                            'groesse( n, n );\n' +
                            'flaeche(   MOCCASIN );\n' +
                            'var farbe = [DARKOLIVEGREEN, BLUE, YELLOW, CRIMSON, BLACK]\n' +
                            '\n' +
                            'for(var j=0; j<farbe.length; j++ ) {\n' +
                            '\tfor( var i=0; i<n-2*j; i++ ) {\n' +
                            '\t\tfarbe2( j, j+i, farbe[j] );\n' +
                            '\t\tfarbe2( n-j-1, j+i, farbe[j] );\n' +
                            '\t\tfarbe2( j+i, j, farbe[j] );\n' +
                            '\t\tfarbe2( j+i, n-j-1, farbe[j] ); \n' +
                            '\t}\n' +
                            '}'},
                    {title: 'Kreuz und Quer', code: 'const N = 32;\n' +
                            'const d = 8;\n' +
                            '\n' +
                            'groesse( N, N );\n' +
                            'formen("s");\n' +
                            'farben( BLUE );\n' +
                            '\n' +
                            'for( var x=0; x<N; x++ ) {\n' +
                            '\tfor( var y=0; y<N; y++ ) {\n' +
                            '\t\tif( (x + y) % d == 0 || (x-y) % d == 0 ) {\n' +
                            '\t\t\tfarbe2( x, y, YELLOW );\n' +
                            '\t\t}\n' +
                            '\t}\n' +
                            '}'},
                    {title: 'Textanzeiger', code: 'async function textAnzeige() {\n' +
                            '\tvar text = ""\n' +
                            '\tfor( i=10; i>0; i-- ) {\n' +
                            '\t\ttext +=  i + " "\n' +
                            '\t\tstatusText(text)\n' +
                            '\t\tawait sleep(400)\n' +
                            '\t}\n' +
                            '\tstatusText(text + "<br> Fertig")\n' +
                            '}\n' +
                            'textAnzeige()'},
                    {title: 'Buchstabe L', code: 'groesse( 10, 10 );\n' +
                            'for(var x=2; x<6; x++ ) {\n' +
                            '\tfarbe2( x, 2, BLUE );\n' +
                            '\tform2( x, 2, "s" ); \n' +
                            '}\n' +
                            'for(var  y=2; y<8; y++ ) {\n' +
                            '\tfarbe2( 2, y, BLUE );\n' +
                            '\tform2( 2, y, "s" ); \n' +
                            '}\n' +
                            'farbe2( 5,3, BLUE);\n' +
                            'form2( 5,3, "b");\n' +
                            'symbolGroesse2( 5, 3, 0.2 );'},
                    {title: 'Bubble Sort', code: 'var feld = []\n' +
                            'const N = 10\n' +
                            'const warteZeit = 100\n' +
                            '\n' +
                            'function aendere(i, farbe) {\n' +
                            '\tfarbe2(i, 0, farbe);\n' +
                            '\tsymbolGroesse2(i, 0, feld[i]);\n' +
                            '}\n' +
                            '\n' +
                            'function tausche(i, j) {\n' +
                            '\tvar tmp = feld[i];\n' +
                            '\tfeld[i] = feld[j];\n' +
                            '\tfeld[j] = tmp;\n' +
                            '}\n' +
                            '\n' +
                            'async function bubble() {\n' +
                            '\tgroesse(N, 1)\n' +
                            '\tstatusText("Bubble Sort Demo")\n' +
                            '\tformen("b")\n' +
                            '\tfor (var i = 0; i < N; i++) {\n' +
                            '\t\tfeld[i] = 0.1 + 0.4 * Math.random()\n' +
                            '\t\taendere(i, BLUE)\n' +
                            '\t}\n' +
                            '\n' +
                            '\tfor (var n = feld.length; n > 1; --n) {\n' +
                            '\t\tfor (var i = 0; i < n - 1; ++i) {\n' +
                            '\t\t\taendere(i, YELLOW);\n' +
                            '\t\t\tawait sleep(warteZeit);\n' +
                            '\t\t\tif (feld[i] > feld[i + 1]) {\n' +
                            '\t\t\t\ttausche(i, i + 1);\n' +
                            '\t\t\t\taendere(i + 1, RED);\n' +
                            '\t\t\t\tawait sleep(warteZeit);\n' +
                            '\t\t\t}\n' +
                            '\t\t\taendere(i, BLUE);\n' +
                            '\t\t\taendere(i + 1, BLUE);\n' +
                            '\t\t}\n' +
                            '\t\taendere(n - 1, LIGHTGREEN);\n' +
                            '\t\taendere(0, LIGHTGREEN)\n' +
                            '\t}\n' +
                            '}\n' +
                            '\n' +
                            'bubble()'},
                    {title: 'Game of life', code: '// setze Semicolons auf optional \n' +
                            '// jshint asi:true\n' +
                            '// jshint esversion:6\n' +
                            '\n' +
                            'const N = 40\n' +
                            'const warteZeit = 300\n' +
                            'const maxGen = 50;\n' +
                            'var feld = []\n' +
                            'groesse( N, N );\n' +
                            'formen( "s" );\n' +
                            '\n' +
                            'function anlegen() {\n' +
                            '\tfor( var x=0; x<N; x++) {\n' +
                            '\t\tfeld[x] = [];\n' +
                            '\t\tfor( var y=0; y<N; y++ ) {\n' +
                            '\t\t\tfeld[x][y] = (Math.random()<0.5)?1:0;\n' +
                            '\t\t}\n' +
                            '\t}\n' +
                            '}\n' +
                            '\n' +
                            'function anzeigen() {\n' +
                            'farben( WHITE );\n' +
                            '\tfor( var x=1; x<N-1; x++ ) {\n' +
                            '\t\tfor( var  y=1; y<N-1; y++ ) {\n' +
                            '\t\t\tif( feld[x][y] == 1 ) {\n' +
                            '\t\t\t\tfarbe2( x, y, LIGHTGREEN );\n' +
                            '\t\t\t}\n' +
                            '\t\t}\n' +
                            '\t}\n' +
                            '}\n' +
                            '\n' +
                            'function  nextGeneration(  )  {\n' +
                            '\tvar neu = [];\n' +
                            '\tfor( var x=0; x<N; x++ ) {\n' +
                            '\t\tneu[x] = [];\n' +
                            '\t\tfor( var y=0; y<N; y++ ) {\n' +
                            '\t\t\tif( x == 0 | y == 0 | x == N-1 | y == N-1 ) {\n' +
                            '\t\t\t\tneu[x][y] = 0;\n' +
                            '\t\t\t} else {\n' +
                            '\t\t\t\tvar n = anzahlNachbarn( x, y  );\n' +
                            '\t\t\t\tneu[x][y] = ueberleben( feld[x][y], n );\n' +
                            '\t\t\t}\n' +
                            '\t\t}\n' +
                            '\t}\n' +
                            '\treturn neu;\n' +
                            '}\n' +
                            '\n' +
                            'function anzahlNachbarn(  x,  y ) {\n' +
                            '\tvar anz = 0;\n' +
                            '\tfor( var i=x-1; i<=x+1; i++ ) {\n' +
                            '\t\tfor( var j=y-1; j<=y+1; j++ ) {\n' +
                            '\t\t\tanz += feld[i][j];\n' +
                            '\t\t}\n' +
                            '\t}\n' +
                            '\treturn anz - feld[x][y];\n' +
                            '}\n' +
                            '\n' +
                            'function  ueberleben(  lebe,  nachbarn) {\n' +
                            '\tif( lebe == 0 & nachbarn == 3 ) {\n' +
                            '\t\treturn 1;\n' +
                            '\t} else if( lebe == 1 & (nachbarn == 2 | nachbarn == 3 ) ) {\n' +
                            '\t\treturn 1;\n' +
                            '\t}\n' +
                            '\treturn 0;\n' +
                            '}\n' +
                            '\n' +
                            'async function life() {\n' +
                            '\tanlegen();\n' +
                            '\tfor( var n=0; n<maxGen; n++ ) {\n' +
                            '\t\tstatusText("Generation " + n)\n' +
                            '\t\tfeld = nextGeneration();\n' +
                            '\t\tanzeigen();\n' +
                            '\t\tawait sleep(warteZeit);\n' +
                            '\t}\n' +
                            '}\n' +
                            '\n' +
                            'life();'}
                ]

            }
        }
    }
</script>
