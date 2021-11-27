<template>
  <div class="container-fluid h-100">
    <div class="row align-items-center h-100 full-size">
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
                  <h2>Quelle est votre date de naissance ?</h2>
                </div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <b-form-datepicker class="mb-2"></b-form-datepicker>
                </div>
                <div class="col-lg-3"></div>
              </div>

              <div class="row mt-4 text-center">
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
  methods: {
    goNextStep: function () {
      this.$router.push({ name: "Register4" });
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
  position: fixed;
  top: 0;
  left: 0;
}
</style>
