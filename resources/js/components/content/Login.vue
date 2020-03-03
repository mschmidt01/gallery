<template>
    <div>
        <h1 class="title">Login</h1>
        <section>
            <form class="login-form mx-auto">
                <div class="form-group">
                    <label for="inputName">Name</label>
                    <input type="email" class="form-control" id="inputName" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                    <label for="inputPassword">Passwort</label>
                    <input type="password" class="form-control" id="inputPassword">
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="checkbox">
                    <label class="form-check-label" for="checkbox">Eingeloggt bleiben</label>
                </div>
                <button type="submit" class="btn login-button">Einloggen</button>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .login-form{
        max-width: 400px;
    }
    .login-button {
        color: #fff;
        background-color: blue;
        border-color: blue;
    }
</style>
