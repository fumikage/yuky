<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Yuky</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#">Je veux faire garder mon animal</b-nav-item>
            <b-nav-item href="#" disabled>Devenir petsitter</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar></b-avatar>
            </template>
            <b-dropdown-item v-on:click="goCreate">Inscription</b-dropdown-item>
            <b-dropdown-item v-on:click="goLogin">Connexion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  methods: {
    goCreate: function () {
      this.$router.push({ name: "Register1" });
    },
    goLogin: function () {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
