<template>
    <div>
        <h3>Stand </h3>

        <div class="row">
            <div class="col-md-6 col-md-offset-1">
                <table  class="table table-bordered table-hover">

                    <tr><td>Bilder</td><td> </td></tr>
                    <tr><td>Bewertungen</td><td> </td></tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {

            };
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.error = this.topics = null;
                this.loading = true;
                axios
                    .get('/api/pictures/ratings/counts')
                    .then(response => {
                        console.log(response)
                    });
                axios
                    .get('/api/pictures/ratings/voting/counts')
                    .then(response => {
                        console.log(response)
                    });
                axios
                    .get('/api/pictures/ratings/voting/2/count')
                    .then(response => {
                        console.log(response)
                    });
            }
        }
    }
</script>