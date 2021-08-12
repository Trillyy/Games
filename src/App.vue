<template>
    <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light z-10">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="/piano">
            <img
              src="https://icon-library.com/images/piano-keys-icon/piano-keys-icon-25.jpg"
              height="35"
              alt=""
              loading="lazy"
            />
            Piano
          </a>
          <a class="navbar-brand mt-2 mt-lg-0" href="/card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/1200px-Playing_card_club_2.svg.png"
              height="35"
              alt=""
              loading="lazy"
            />
            Card
          </a>
          <a class="navbar-brand mt-2 mt-lg-0" href="/minesweeper">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Gnome_Mines.png"
              height="35"
              alt=""
              loading="lazy"
            />
            Minesweeper
          </a>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Games with Vue.js</a>
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
<!-- Navbar -->
    <v-main>
      <router-view/>
    </v-main>
    <footer class="text-center text-lg-start bg-light text-muted fixed bottom-0">
      <!-- Copyright -->
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="">Davide Chiapperini</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

*, *::after, *::before {
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background: rgb(0,36,16);
    height: 100vh;
background: radial-gradient(circle, rgba(0,36,16,1) 0%, rgba(26,121,9,1) 29%, rgba(255,0,0,1) 78%);
}
</style>