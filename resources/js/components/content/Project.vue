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
                    <pre v-highlightjs>
                        <code class="javascript">
    for( x=1; x&lt;6;  x++ ) {
        for( y=x; y&lt;6; y++ ) {
            farbe2( x, y, BLUE )
            if( x == y ) {
                form2( x, y, "tlu" )
            } else {
                form2( x, y, "s" )
            }
        }
    }
                    </code></pre>
                </div>
                <div class="col-md-6">
                    <img :src="'/img/BoS.png'" alt="BoS Screen" style="height:242px;" class="mx-auto d-block">
                </div>
            </div>
            <div>
                <p class="pt-4 pt-md-3">Informationen zum BoS-Projekt findet man auf <a
                    href="https://github.com/stephaneuler/board-of-symbols">github</a>.</p></div>
        </section>
    </div>
</template>

<script>
    export default {}
</script>
