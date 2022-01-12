<template>
  <div class="container-fluid h-100">
    <div class="row align-items-center h-100 full-size mt-4">
      <div class="col-lg-6 mx-auto">
        <b-card
          ><div class="row">
            <div class="col-lg-12">
              <h1 class="text-center">
                Vous souhaitez vous inscrire sur notre plateforme ?
              </h1>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-12">
              <div class="row text-center">
                <div class="col-lg-12">
                  <h2>Commencez par nous indiquer votre adresse mail !</h2>
                </div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                  <b-form-input
                    placeholder="E-mail"
                    size="sm"
                    v-model="mail"
                  ></b-form-input>
                </div>
                <div class="col-lg-4"></div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-12">
                  <p>
                    En tant qu'abonné(e), je peux me désinscrire à tout moment
                    en contactant la société XXXX ou en suivant le lien dans la
                    newsletter.
                  </p>
                </div>
              </div>
              <div class="row text-center">
                <div class="col-lg-12">
                  <b-button v-on:click="goNextStep">Continuer</b-button>
                </div>
              </div>
            </div>
          </div></b-card
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      mail: "",
    };
  },
  methods: {
    goNextStep: async function () {
      let validate = await this.checkMail();

      if (validate === 1) {
        console.log("testt");
        this.$router.push({ name: "Register2" });
      }
    },
    checkMail: async function () {
      let validate = this.$store.dispatch("user/checkMail", {
        mail: this.mail,
      });
      return validate;
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
