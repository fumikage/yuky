<template>
  <div class="container-fluid ps-md-0">
    <div class="row align-items-center h-100 full-size mt-4">
      <div class="col-lg-6 mx-auto">
        <b-card
          ><div class="row">
            <div class="col-lg-12">
              <h1 class="text-center">Connectez vous à votre espace</h1>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-12">
              <div class="row text-center">
                <div class="col-lg-12">
                  <h2>Renseignez vos identifiants</h2>
                </div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <b-form-input
                    placeholder="E-mail"
                    v-model="mail"
                  ></b-form-input>
                </div>
                <div class="col-lg-3"></div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <b-form-input
                    type="password"
                    placeholder="Mot de passe"
                    v-model="password"
                  ></b-form-input>
                </div>
                <div class="col-lg-3"></div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <b-button v-on:click="Login">Continuer</b-button>
                </div>
                <div class="col-lg-3"></div>
              </div>
            </div></div
        ></b-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data: function () {
    return {
      mail: "",
      password: "",
    };
  },

  methods: {
    Login: async function () {
      if (
        await this.$store.dispatch("user/login", {
          mail: this.mail,
          password: this.password,
        })
      ) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 150%;
}
h2 {
  font-size: 140%;
}
.row {
  display: flex;
  flex-direction: row;
}
.full-size {
  height: 100vh;
  width: 100vw;

  top: 0;
  left: 0;
}
</style>
