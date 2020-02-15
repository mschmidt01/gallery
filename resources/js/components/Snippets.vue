<template>
<div class="row">
            <p>
                Hier sind einige Beispiele f&uuml;r die Live-Version zusammengestellt.
                Die Programmiersprache ist JavaScript.
                Die Beispiele funktioniert in BoS-Live, aber nur teilweise im JS Mode in BoS.
                Der in Java
                eingebaute JS-Interpreter unterst&uuml;tzt den aktuellen JS-Standard nicht vollst&auml;ndig.
            </p>

            <h3>Zufall</h3>
            <pre><code>const n = 16;
    groesse( n, n );
    flaeche( LAVENDERBLUSH )

    for(var x=0; x&lt;n; x++ ) {
       for( var y=0;y&lt;n; y++ ) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
       farbe2(    x, y, "rgb(" + r + "," + g + "," + b + ")" )
     }
    }
    </code></pre>


            <h3>Rahmen</h3>
            <pre><code>var n = 12;
    groesse( n, n );
    flaeche(   MOCCASIN );
    var farbe = [DARKOLIVEGREEN, BLUE, YELLOW, CRIMSON, BLACK]

    for(var j=0; j&lt;farbe.length; j++ ) {
       for( var i=0; i&lt;n-2*j; i++ ) {
          farbe2( j, j+i, farbe[j] );
          farbe2( n-j-1, j+i, farbe[j] );
          farbe2( j+i, j, farbe[j] );
          farbe2( j+i, n-j-1, farbe[j] );
       }
    }
    </code></pre>


            <h3>Kreuz und Quer</h3>
            <pre><code>const N = 32;
    const d = 8;

    groesse( N, N );
    formen("s");
    farben( BLUE );

    for( var x=0; x&lt;N; x++ ) {
       for( var y=0; y&lt;N; y++ ) {
          if( (x + y) % d == 0 || (x-y) % d == 0 ) {
           farbe2( x, y, YELLOW );
          }
       }
    }
    </code></pre>

            <!--
            <h3>Kreuz und Quer - Java</h3>
            <pre><code>int N = 32, d = 8;
            groesse( N, N );

            for( int x=0; x&ltN; x++ ) {
               for( int y=0; y&ltN; y++ ) {
                  if( (x-y) % d == 0  ) {
                   farbe2( x, y, BLUE );
                  }
               }
            }
            </code></pre>
            -->

            <h3>Textanzeiger</h3>
            <pre><code>async function textAnzeige() {
      var text = ""
      for( i=10; i>0; i-- ) {
        text +=  i + " "
        statusText(text)
        await sleep(400)
      }
      statusText(text + "&lt;br&gt;Fertig")
    }
    textAnzeige()
    </code></pre>


            <h3>Buchstabe L</h3>
            <pre><code>groesse( 10, 10 );
    for(var x=2; x&lt;6; x++ ) {
        farbe2( x, 2, BLUE );
        form2( x, 2, "s" );
    }
    for(var  y=2; y&lt;8; y++ ) {
        farbe2( 2, y, BLUE );
        form2( 2, y, "s" );
    }
    farbe2( 5,3, BLUE);
    form2( 5,3, "b");
    symbolGroesse2( 5, 3, 0.2 );
    </code></pre>


            <h3>Bubble Sort</h3>
            <pre><code>var feld = []
    const N = 10
    const warteZeit = 100

    function aendere(i, farbe) {
      farbe2(i, 0, farbe);
      symbolGroesse2(i, 0, feld[i]);
    }

    function tausche(i, j) {
      var tmp = feld[i];
      feld[i] = feld[j];
      feld[j] = tmp;
    }

    async function bubble() {
      groesse(N, 1)
      statusText("Bubble Sort Demo")
      formen("b")
      for (var i = 0; i &lt; N; i++) {
        feld[i] = 0.1 + 0.4 * Math.random()
        aendere(i, BLUE)
      }

      for (var n = feld.length; n &gt; 1; --n) {
        for (var i = 0; i &lt; n - 1; ++i) {
          aendere(i, YELLOW);
          await sleep(warteZeit);
          if (feld[i] &gt; feld[i + 1]) {
            tausche(i, i + 1);
            aendere(i + 1, RED);
            await sleep(warteZeit);
          }
          aendere(i, BLUE);
          aendere(i + 1, BLUE);
        }
        aendere(n - 1, LIGHTGREEN);
        aendere(0, LIGHTGREEN)
      }
    }

    bubble()
    </code></pre>

            <h3>Game of life</h3>
            <pre><code>// setze Semicolons auf optional
    // jshint asi:true
    // jshint esversion:6

    const N = 40
    const warteZeit = 300
    const maxGen = 50;
    var feld = []
    groesse( N, N );
    formen( "s" );

    function anlegen() {
        for( var x=0; x&lt;N; x++) {
             feld[x] = [];
             for( var y=0; y&lt;N; y++ ) {
                feld[x][y] = (Math.random()&lt;0.5)?1:0;
             }
         }
    }

    function anzeigen() {
       farben( WHITE );
       for( var x=1; x&lt;N-1; x++ ) {
          for( var  y=1; y&lt;N-1; y++ ) {
             if( feld[x][y] == 1 ) {
                farbe2( x, y, LIGHTGREEN );
             }
          }
       }
    }

    function  nextGeneration(  )  {
       var neu = [];
       for( var x=0; x&lt;N; x++ ) {
          neu[x] = [];
          for( var y=0; y&lt;N; y++ ) {
              if( x == 0 | y == 0 | x == N-1 | y == N-1 ) {
                  neu[x][y] = 0;
              } else {
              var n = anzahlNachbarn( x, y  );
              neu[x][y] = ueberleben( feld[x][y], n );
              }
          }
       }
       return neu;
    }

    function anzahlNachbarn(  x,  y ) {
       var anz = 0;
       for( var i=x-1; i&lt;=x+1; i++ ) {
          for( var j=y-1; j&lt;=y+1; j++ ) {
             anz += feld[i][j];
          }
       }
       return anz - feld[x][y];
    }
    function  ueberleben(  lebe,  nachbarn) {
       if( lebe == 0 & nachbarn == 3 ) {
          return 1;
       } else if( lebe == 1 & (nachbarn == 2 | nachbarn == 3 ) ) {
          return 1;
       }
       return 0;
    }

    async function life() {
      anlegen();
      for( var n=0; n&lt;maxGen; n++ ) {
        statusText("Generation " + n)
        feld = nextGeneration();
        anzeigen();
        await sleep(warteZeit);
       }
    }

    life();
    </code></pre>
</div>

</template>
<script>
    export default {}
</script>