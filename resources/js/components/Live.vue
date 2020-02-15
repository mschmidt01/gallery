<template>
    <!--<script type="application/javascript" src="../colors.js"></script>
    <script type="application/javascript">
        var xmin = 0
        var xmax = 1
        var ymin = 0
        var ymax = 1

        var width = 500
        var height = 500
        var canvasLeft
        var canvasTop
        var ctx

        var border = 5
        var columns = 8
        var rows = 8
        var barWidth = 0.4

        var symbols = new Array()
        var numberingFlag = false
        var logView

        function punkt( x, y ) {
            this.x = x;
            this.y = y;

            this.trans =  function() {
                var yfactor = (height-2*border) / (ymax-ymin);
                var xfactor = width / (xmax-xmin);
                var yg = height - border - (y - ymin) * yfactor;
                var xg = (x-xmin) * xfactor;
                //console.log( y + " -> " + yg )
                return  new punkt( xg, yg )
            }
        }

        function Symbol( x, y ) {
            this.x = x;
            this.y = y;
            this.size  = 0.45
            this.color = '#c0c0c0';
            this.textColor = BLACK;
            this.type  = "c"
            this.text  = ""

            this.getDataSet = function() {
                var plotter = new dataSet( "d-" + this.x +  this.y)

                switch( this.type ) {
                    case "c":
                        for (var t = 0; t < 2 * Math.PI; t += 0.03) {
                            var xx = this.x + this.size * Math.cos(t);
                            var yy = this.y + this.size * Math.sin(t);
                            plotter.add(xx, yy);
                        }
                        break;
                    case "d":
                        plotter.add(this.x - this.size, this.y);
                        plotter.addD(this.size, -this.size);
                        plotter.addD(this.size, +this.size);
                        plotter.addD(-this.size, this.size);
                        plotter.addD( -this.size, -this.size);
                        break
                    case "s":
                        plotter.add(this.x - this.size, this.y - this.size);
                        plotter.addD(2 * this.size, 0);
                        plotter.addD(0, 2 * this.size);
                        plotter.addD(-2 * this.size, 0);
                        plotter.addD(0, -2 * this.size);
                        break

                    case "*":
                        var spitzen = 8;
                        var phi = 2 * Math.PI / spitzen;
                        var radius1 = 0.4 * this.size;
                        for (var t = -phi / 4; t < 2 * Math.PI; t += phi) {
                            var xx = this.x + radius1 * Math.cos(t);
                            var yy = this.y + radius1 * Math.sin(t);
                            plotter.add(xx, yy);
                            xx = this.x + this.size * Math.cos(t + phi / 2.);
                            yy = this.y + this.size * Math.sin(t + phi / 2.);
                            plotter.add(xx, yy);
                        }
                        var xx = radius1 + this.x;
                        var yy = this.y;
                        plotter.add(xx, yy);
                        break
                    case "b":
                        plotter.add( this.x - barWidth, this.y - 0.5);
                        plotter.addD( 0, 2 * this.size);
                        plotter.addD( 2 * barWidth, 0);
                        plotter.addD( 0, -2 * this.size);
                        plotter.addD( -2 * barWidth, 0);
                        break
                    case "none":
                        break
                    default:
                        console.log(  "Symboltyp " + this.type + " (noch) nicht implementiert")

                }
                return plotter
            }

            this.update = function() {
                this.dataSet = this.getDataSet()
                this.dataSet.malen( this.color)
                var text = this.text
                if( numberingFlag & text == "" ) {
                    text = x+","+y
                }
                if( text != "" ) {
                    var c1 = new punkt( this.x, this.y)
                    var c1t = c1.trans()
                    ctx.font = "14px Arial";
                    ctx.textAlign = "center";
                    ctx.fillStyle = this.textColor;
                    ctx.fillText( text, c1t.x, c1t.y)
                }
            }

            this.clear = function() {
                var c1 = new punkt( this.x-0.5, this.y-0.5)
                var c2 = new punkt( this.x+0.5, this.y+0.5)
                var c1t = c1.trans()
                var c2t = c2.trans()
                //console.log( "clear " +  c1t.x + " " +  c1t.y + " " +  (c2t.x-c1t.x) + " " + ( c1t.y-c2t.y) )
                ctx.clearRect( c1t.x, c2t.y, c2t.x-c1t.x, c1t.y-c2t.y)
                return this
            }

            this.update()
        }

        function infotext() {
            return " x: [" + xmin.toPrecision(3) +"," + xmax.toPrecision(3) + "]"
                + " y: [" + ymin.toPrecision(3) +"," + ymax.toPrecision(3) + "]"
        }

        function  dataSet( name )   {
            this.name   = name
            this.punkte = new Array()

            this.text   = function() {
                return this.name + " x: [" + xmin.toPrecision(3) +"," + xmax.toPrecision(3) + "]"
                    + " y: [" + ymin.toPrecision(3) +"," + ymax.toPrecision(3) + "]"
            }
            this.add    = function( x, y ) {
                this.punkte.push( new punkt( x, y ) )
                xmax = Math.max( xmax, x)
                xmin = Math.min( xmin, x)
                ymax = Math.max( ymax, y)
                ymin = Math.min( ymin, y)

            }
            this.addD    = function( x, y ) {
                var last = this.punkte.slice(-1)[0]
                this.add( last.x + x, last.y + y )

            }
            this.malen = function( color ) {
                if( this.punkte.length == 0 ) {
                    return
                }
                ctx.lineWidth=2;
                ctx.fillStyle = color;
                //console.log( "color: " + ctx.fillStyle )
                ctx.beginPath();

                var drawPoint = this.punkte[0].trans()
                ctx.moveTo( drawPoint.x, drawPoint.y)
                for( var i=1; i<this.punkte.length; i++ ) {
                    var drawPoint = this.punkte[i].trans()
                    ctx.lineTo( drawPoint.x, drawPoint.y)
                }
                ctx.stroke()
                ctx.closePath();
                ctx.fill();
            }
        }

        function clearSymbol(x, y ) {
            var c1 = new punkt( x-0.5, y-0.5)
            var c2 = new punkt( x+0.5, y+0.5)
            var c1t = c1.trans()
            var c2t = c2.trans()
            //console.log( "clear " +  c1t.x + " " +  c1t.y + " " +  (c2t.x-c1t.x) + " " + ( c1t.y-c2t.y) )
            ctx.clearRect( Math.round(c1t.x), Math.round(c2t.y), Math.round(c2t.x-c1t.x), Math.round(c1t.y-c2t.y) )
        }

        function numbering( ) {
            numberingFlag = ! numberingFlag
            symbols.forEach( function(s) {
                s.clear().update();
            })
        }

        function statusText( text) {
            document.getElementById("titel").innerHTML=text;
        }

        function text2(x, y, text) {
            var ind = index(x,y)
            symbols[ind].text = text
            symbols[ind].update()
        }

        function farben(c) {
            for( var x=0; x<columns; x++ ) {
                for( var y=0; y<rows; y++ ) {
                    farbe2( x, y, c);
                }
            }
        }
        function farbe2(x, y , c) {
            var ind = index(x,y)
            symbols[ind].color = c;
            //symbols[ind].clear()
            symbols[ind].update()
        }

        function textFarbe2(x, y , c) {
            var ind = index(x,y)
            symbols[ind].textColor = c;
            //symbols[ind].clear()
            symbols[ind].update()
        }

        function form2(x, y , c) {
            var ind = index(x,y)
            console.log( ind )
            symbols[ind].type = c;
            symbols[ind].clear().update()
        }

        function symbolGroesse2(x, y, s) {
            var ind = index(x,y)
            symbols[ind].size = s;
            symbols[ind].clear().update()
        }

        function formen(type) {
            for( var x=0; x<columns; x++ ) {
                for( var y=0; y<rows; y++ ) {
                    form2( x, y, type);
                }
            }
        }


        function index( x, y ) {
            var ind =  x + y * columns
            if( x >= columns | y >= rows  | x < 0 | y < 0) {
                var e = new Error();
                var m = e.stack.match(/ymous>:[0-9]+/)
                var parts = m[0].split(":")
                console.log( ">>" + parts[1]);

                throw new RangeError( "Out of range: ("+x+","+y+") line " + parts[1] )
            }
            return ind
        }

        function groesse( c, r ) {
            columns = c
            rows = r
            clearAll();
            board()
        }

        function clearAll() {
            while (symbols.length > 0) {
                symbols.pop()
            }
            clearCanvas()
        }


        function board( ) {
            xmin = -1
            ymin = -1
            xmax = columns
            ymax = rows
            //console.log( "in board() ")
            for( var x=0; x<columns; x++ ) {
                for( var y=0; y<rows; y++ ) {
                    var ind = index(x,y)
                    symbols[ind] = new Symbol( x, y )
                    //form2( x, y, "c");
                    //console.log( ind + " " + symbols[ind].dataSet.name)
                }
            }
            console.log( infotext() )
            document.getElementById("titel").innerHTML=infotext();

        }

        function runCode() {
            console.log( "run code " )
            logView.innerHTML = ""

            //var code = document.getElementById("codeView").value
            eval( editor.getValue() )
        }

        function runJava() {
            console.log( "run java code " )
            logView.innerHTML = ""

            var code = document.getElementById("codeView").value
            var fcts = []
            $.post("api.php", {action:"compile", code:code }, function(data){
                alert("Data: " + data);
                var lines = JSON.parse( data )
                for(  var i in lines ) {
                    if( lines[i].indexOf(">>") == 0 ) {
                        eval( lines[i].slice( 3 ) )
                    } else {
                        logView.innerHTML += lines[i] + "<br>"
                    }
                }
            })
        }

        function download(text, name, type) {
            var a = document.createElement("a");
            var file = new Blob([text], {type: type});
            a.href = URL.createObjectURL(file);
            a.download = name;
            a.click();
        }

        function saveCode() {
            console.log( "save code " )
            fileName = document.getElementById("fileNameField").value
            logView = document.getElementById("consoleLog");
            if( fileName === "" ) {
                logView.innerHTML =  'Bitte Dateiname  angeben'
                return

            }
            download( editor.getValue(), fileName, 'text/plain');
            logView.innerHTML = ""
        }

        function clearCanvas() {
            console.log( "clear canvas" )
            ctx.beginPath();
            ctx.clearRect( 0, 0, width, height)
        }

        function flaeche( c ) {
            console.log( "fill canvas" )
            var canvas = document.getElementById("myCanvas");
            canvas.style.background = c;
            //ctx.FillRect( 0, 0, width, height)

        }
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    </script>


    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/addon/lint/lint.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/javascript/javascript.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/css/css.js"></script>
    <script src="https://unpkg.com/jshint@2.9.6/dist/jshint.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/addon/lint/lint.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/addon/lint/javascript-lint.js"></script>-->



    <div class="row">
        Dies ist eine Testseite mit einer ersten Web-Version von BoS
        <div class="col-sm-6">
            <div id="titel">Plotter</div>

           <!-- <script>
                document.write( '<canvas id="myCanvas"  width="' + width +'" height="' + height +'"   style="border:1px solid #c3c3c3;">' )
            </script>-->
            Your browser does not support the HTML5 canvas tag.
            <canvas id="myCanvas"  width="' + width +'" height="' + height +'"   style="border:1px solid #c3c3c3;">
            </canvas>
            <br>
            <!--<button onClick='board()'> Board </button>
            <button onClick='clearCanvas()'> L&ouml;schen </button>
            <button onClick='numbering()'> Nummerierung </button>-->
            <br>
        </div>
        <div class="col-sm-6">
            Hier JavaScript Code eintragen.
            Bereits implementiert:
            <code>form2</code>,
            <code>farbe2</code>,
            <code>formen</code>,
            <code>farben</code>,
            <code>text2</code>,
            <code>groesse</code>, ...
            (siehe auch <a href="index.php?inhalt=functions">Hilfe - Funktionen</a>)
            <textarea id="codeView" rows="20" cols="120">
// setze Semicolons auf optional
// jshint asi:true

// einige Beispiele:
farben(  YELLOW )
form2( 3, 4, "d" )
form2( 2, 4, "s" )
farbe2( 3, 4, "#0000FF" )
text2(2,2,"Hallo")
</textarea>
            <br>
           <!-- <button onClick='runCode()'> JavaScript ausf&uuml;hren</button>
            &lt;!&ndash;  <button onClick='runJava()'> Java </button> &ndash;&gt;
            <button onClick='saveCode()' title="Speichert das Snippet in eine Datei"> Speichern </button>-->
            <input type='text' id='fileNameField' value='snippet.txt' title="Dateiname zum Speichern des Snippets"/>
            <div id="consoleLog">
            </div>
        </div>
    </div>

  <!--  <script type="application/javascript">
        $(document).ready(function(){
            var c=document.getElementById("myCanvas");
            canvasLeft = c.offsetLeft
            canvasTop  = c.offsetTop
            c.addEventListener('click', function( event ){
                var co = $("canvas").offset();
                var x = event.pageX - co.top
                var y = event.pageY - co.left
                console.log("click " + x + " " + y )
            }, false);


            logView = document.getElementById("consoleLog");

            window.onerror = function myErrorHandler(err, url, line) {
                var message = '<div class="alert alert-danger"><strong>ERROR! </strong>' + err
                if( ! /line [0-9]+/.test( err ) )  {
                    message += " line " + line
                }
                message +=  '</div>'
                logView.innerHTML += message
                return false; // so you still log errors into console
            }
            ctx=c.getContext("2d");
            board()

            editor = CodeMirror.fromTextArea( document.getElementById("codeView"), {
                lineNumbers: true,
                mode:  "javascript",
                gutters: ["CodeMirror-lint-markers"],
                lint: true
            });
        })
    </script>-->
</template>
<script>
    export default {}
</script>