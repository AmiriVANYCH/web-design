<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary fixed-top " >
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img class="rounded  " src="img/logo.png" alt="" width="35" height="35"> Контроль знань</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample01">
                <ul class="navbar-nav me-auto mb-2">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/test">Почати тенстування</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/about">Про сайт</a>
                    </li>
                </ul>
                <form>
                    <a class="btn btn-primary" href="/profile" role="button">Профіль</a>

                </form>
            </div>
        </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

