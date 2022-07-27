<template>
  <div class="container">
    <Navbar v-on:change="change" />
    <div v-if="state == 0" class="main">client</div>
    <div v-if="state == 1" class="main">
      <div class="left">
        <div class="card">
          <div class="header">
            <img
              src="../../assets/img/edit_profil.svg"
              class="edit-profil"
              v-on:click="editProfilPicture"
            />
            <img
              class="profil"
              v-if="user.picture == ''"
              src="../../assets/img/profil.png"
            />
          </div>
          <div class="name-section">
            <span class="name">{{ user.firstName }} {{ user.lastName }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="card">1</div>
          <div class="card">2</div>
          <div class="card">3</div>
        </div>
        <div class="bottom"><div class="card">test</div></div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/layouts/profil/Navbar.vue";
export default {
  name: "Profil",
  components: {
    Navbar,
  },
  data: function () {
    return {
      state: 1,
      user: {},
    };
  },
  beforeMount() {
    this.user = this.$store.state.user.user;
  },
  methods: {
    change: function (el) {
      this.state = el;
    },
    editProfilPicture: function () {},
  },
};
</script>
<style scoped>
.container {
  background-color: #2b2d42;
  height: 100%;
  max-width: 1920px;
  padding: 0;
  margin: auto;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80%;
}
.main .left {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.main .right {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card {
  width: 70%;
  height: 100%;
  background: rgba(237, 242, 244, 0.3);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
.card .header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
}
.profil {
  width: 30%;
  height: 50%;
  border-radius: 50%;
}
.name-section {
  display: flex;
  justify-content: center;
}
.name {
  color: white;
  font-family: poppins-extrabold;
  font-size: 3vh;
}
.edit-profil {
  position: absolute;
  margin-top: -3%;
  margin-left: 3%;
  cursor: pointer;
}
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30%;
  width: 100%;
}
.bottom {
  display: flex;
  flex-direction: row;
  height: 70%;
  align-items: flex-end;
}
.top .card {
  height: 90%;
  width: 32%;
}
.bottom .card {
  width: 100%;
  height: 95%;
}
</style>
