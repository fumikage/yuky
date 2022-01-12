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
                  <h2>Présentez-vous</h2>
                </div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                  <b-form-input
                    placeholder="Mon prénom"
                    size="sm"
                    v-model="firstName"
                  ></b-form-input>
                </div>
                <div class="col-lg-4"></div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                  <b-form-input
                    placeholder="Mon nom"
                    size="sm"
                    v-model="lastName"
                  ></b-form-input>
                </div>
                <div class="col-lg-4"></div>
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
  data: function () {
    return { firstName: "", lastName: "" };
  },
  beforeMount() {
    console.log("user", this.$store.state.user.create_user);
    if (
      this.$store.state.user.create_user.firstName &&
      this.$store.state.user.create_user.lastName
    ) {
      this.firstName = this.$store.state.user.create_user.firstName;
      this.lastName = this.$store.state.user.create_user.lastName;
    }
  },
  methods: {
    goNextStep: function () {
      this.$store.dispatch("user/setName", {
        firstName: this.firstName,
        lastName: this.lastName,
      });

      this.$router.push({ name: "Register3" });
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
