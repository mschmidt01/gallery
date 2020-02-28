<template>
    <div class="container">
        <h1 class="title">Quiz</h1>
        <p class="text-center pt-4">Wie kann man die folgenden Bilder in BoS erzeugen?</p>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" :src="'/img/sinus.png'" alt="Sinus Kurve in BoS">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" :src="'/img/sinus.png'" alt="Sinus Kurve in BoS">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" :src="'/img/sinus.png'" alt="Sinus Kurve in BoS">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>


    <!--<div class="flex-center position-ref full-height">
        <p>
            Wie kann man die folgenden Bilder in BoS erzeugen?
        </p>

        <h3>Sinus</h3>
        <img :src="'/img/sinus.png'"class="quizImage">
    </div>-->
</template>
<script>
    export default {}
</script>
