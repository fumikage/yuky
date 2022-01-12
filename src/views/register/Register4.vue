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
                  <h2>Comment préférez-vous que l'on vous appelle ?</h2>
                </div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <b-button
                    v-on:click="goNextStep('0')"
                    :pressed.sync="buttons[0].state"
                    >Mme</b-button
                  >
                </div>
                <div class="col-lg-3"></div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <b-button
                    v-on:click="goNextStep('1')"
                    :pressed.sync="buttons[1].state"
                    >M.</b-button
                  >
                </div>
                <div class="col-lg-3"></div>
              </div>
              <div class="row mt-4 text-center">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <b-button
                    v-on:click="goNextStep('2')"
                    :pressed.sync="buttons[2].state"
                    >Je ne préfère pas le dire</b-button
                  >
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
  data: function () {
    return {
      sex: "",
      buttons: [
        { caption: "0", state: false },
        { caption: "1", state: false },
        { caption: "2", state: false },
      ],
    };
  },
  beforeMount() {
    this.sex = this.$store.state.user.create_user.sex;
    for (let button of this.buttons) {
      if (button.caption === this.sex) {
        console.log("test", button.caption);
        this.buttons[this.sex].state = true;
      }
    }
    console.log("buton", this.buttons);
  },
  methods: {
    goNextStep: function (sex) {
      this.$store.dispatch("user/setSex", { sex: sex });
      this.$router.push({ name: "Register6" });
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
