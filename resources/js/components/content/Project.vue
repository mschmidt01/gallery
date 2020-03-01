<template>
    <div>
        <h1 class="title">BoS Project</h1>
        <section>
            <div>
                <p>Auf dieser Web-Site sind Bilder zusammengestellt, die in verschiedenen Lehrveranstaltungen
                    mittels <em>Board of Symbols</em> (BoS) erstellt wurden.
                    Mit BoS kann man &uuml;ber einfache Befehle Muster erzeugen.
                    So wird beispielsweise mit dem Code-Abschnitt das nachfolgende Bild erzeugt:</p>
            </div>

            <div class="row">
                <div class="col-md-6">
                <pre>
<code>for( x=1; x&lt;6;  x++ ) {
    for( y=x; y&lt;6; y++ ) {
        farbe2( x, y, BLUE )
        if( x == y ) {
            form2( x, y, "tlu" )
        } else {
            form2( x, y, "s" )
        }
    }
}</code>
                    </pre>
                </div>
                <div class="col-md-6">
                    <img :src="'/img/BoS.png'" alt="BoS Screen" style="height:242px;" class="mx-auto d-block">
                </div>
            </div>
            <div>
                <p class="pt-4 pt-md-3">Informationen zum BoS-Projekt findet man auf <a
                    href="https://github.com/stephaneuler/board-of-symbols">github</a>.</p></div>
        </section>

        <section>
            <div>
                <h2>Technologien & Umsetzung</h2>
                <p>Diese Web-Applikation nutzt mehrere freie Bibliotheken und Module, die nachfolgend aufgef&uuml;hrt
                    sind.</p>
                <ul>
                    <li><a href="https://jquery.com" target="_blank" rel="noopener noreferrer">jQuery</a></li>
                    <li><a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</a></li>
                    <li><a href="https://www-coding.de/so-gehts-eigenes-captcha-mit-php/" rel="noopener noreferrer">Captcha-Modul
                        von WWW Coding</a></li>
                </ul>

                <p>Bei der Realisierung haben mitgewirkt:</p>
                <ul>
                    <li>Ibrahim Nasim: erste Version mit Datenbank, Bewertung und Filterung</li>
                </ul>
            </div>
        </section>
    </div>

    <!--<div class="flex-center position-ref full-height">
        <div class="content">
            <div class="row">
                <div class="col-md-9 col-md-offset-1">

                    Auf dieser Web-Site sind Bilder zusammengestellt, die in verschiedenen Lehrveranstaltungen
                    mittels <em>Board of Symbols</em> (BoS) erstellt wurden.
                    Mit BoS kann man &uuml;ber einfache Befehle Muster erzeugen.
                    Zu wird beispielsweise mit dem Code-Abschnitt
                    <pre><code>for( x=1; x&lt;6;  x++ ) {
                          for( y=x; y&lt;6; y++ ) {
                            farbe2( x, y, BLUE )
                            if( x == y ) {
                              form2( x, y, "tlu" )
                            } else {
                              form2( x, y, "s" )
                           }
                          }
                        }
                        </code>
                    </pre>
                    das Bild
                    <div><img :src="'/img/BoS.png'" alt="BoS Screen" style="max-width:100%;"></div>
                    erzeugt.
                    Informationen zum BoS-Projekt findet man auf <a
                        href="https://github.com/stephaneuler/board-of-symbols">github</a>

                </div>
            </div>
        </div>
    </div>-->
</template>

<script>
    export default {}
</script>
