<template>
    <div>
        <h1 class="title">BoS Live</h1>
        <section>
            <p class="live-explain-text">
                Dies ist eine Testseite mit einer ersten Web-Version von BoS.
                Bereits implementiert:
                <code>form2</code>,
                <code>farbe2</code>,
                <code>formen</code>,
                <code>farben</code>,
                <code>text2</code>,
                <code>groesse</code>, ...
                (siehe auch <router-link to="/functions">Informationen - Über BoS</router-link>).
            </p>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <div id="titel">Plotter</div>

                    <!-- <script>
                         document.write( '<canvas id="myCanvas"  width="' + width +'" height="' + height +'"   style="border:1px solid #c3c3c3;">' )
                     </script>-->
                    <canvas id="myCanvas" width="500px" height="500px">
                    </canvas>
                    <br>
                    <button type="button" class="btn btn-sec" v-on:click="loadBoard"> Board</button>
                    <button type="button" class="btn btn-sec" v-on:click="clearBoard"> L&ouml;schen</button>
                    <button type="button" class="btn btn-sec" v-on:click="numberingBoardElements"> Nummerierung</button>
                    <br>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="codeView">JavaScript Code</label>

                    <textarea id="codeView" rows="17">
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
                    <button type="button" class="btn" v-on:click="runJS">Ausführen</button>
                    <!--  <button onClick='runJava()'> Java </button> -->
                    <button type="button" class="btn btn-sec" v-on:click="downloadCode" title="Speichert das Snippet in eine Datei"> Speichern</button>
                    <input type='text' class="form-control" id='fileNameField' value='snippet.txt'
                           title="Dateiname zum Speichern des Snippets"/>
                    <div id="consoleLog">
                    </div>
                </div>
            </div>

        </section>
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

    const live = require('../../live.js');
    const color = require('../../live.js');

    export default {
        data() {
            return {
                editor: null,
                height: global.height,
                width: global.width,

            };
        },
        mounted: function () {
            console.log(CodeMirror);
            var c = document.getElementById("myCanvas");
            global.canvasLeft = c.offsetLeft
            global.canvasLeft = c.offsetLeft
            global.canvasTop = c.offsetTop
            global.ctx = c.getContext("2d");
            global.logView = document.getElementById("consoleLog");

            live.board();
            this.editor = CodeMirror.fromTextArea(document.getElementById("codeView"), {
                lineNumbers: true,
                mode: "javascript",
                gutters: ["CodeMirror-lint-markers"],
                lint: true
            });
        },
        methods: {
            loadBoard: function (event) {
                // `this` inside methods points to the Vue instance
                live.board();
            },
            clearBoard: function (event) {
                // `this` inside methods points to the Vue instance
                live.clearCanvas();
            },
            numberingBoardElements: function (event) {
                // `this` inside methods points to the Vue instance
                live.numbering();
            },
            runJS: function (event) {
                // `this` inside methods points to the Vue instance
                live.runCode(this.editor);
            },
            downloadCode: function (event) {
                // `this` inside methods points to the Vue instance
                let fileName = document.getElementById("fileNameField").value
                live.saveCode(fileName, this.editor);
            }
        }
    }
</script>

<style scoped>
    #myCanvas{
        width: 100%;
        height: 400px;
        border: 1px solid rgb(195, 195, 195);
    }
    #codeView{
        width:100%;
        height: 400px;
        border: 1px solid rgb(195, 195, 195);

    }
    input{
        width:auto;
        display: inline;
    }
</style>
