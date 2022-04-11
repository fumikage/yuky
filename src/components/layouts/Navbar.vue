<template>
  <nav>
    <div class="main">
      <div class="logo"><img src="@/assets/img/logo_header.svg" /></div>

      <span class="link">Je veux faire garder mon animal </span>
      <div class="action-btn">
        <button class="btn">Devenir petsitter</button>
      </div>
      <div class="logo-dog"><img src="@/assets/img/badge_profil.png" /></div>
    </div>
  </nav>
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
<style scoped>
.btn {
  background-color: #d80032;
  border: none;
  color: white;
  width: 215px;
  height: 61px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 40px;
  box-shadow: 0px 5px 6px #00000029;
  font-family: poppins-semibold;
}
nav {
  height: 107px;
}
nav .main {
  display: grid;
  grid-template-columns: 20% 30% 20% 20% 10%;
  height: 100%;
}

nav .link {
  display: flex;
  color: white;
  font-family: poppins-semibold;
  font-size: 15px;
  flex-grow: 1;
  grid-column: 3;
  height: 100%;
  align-items: center;
  justify-content: center;
}
nav .logo {
  grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
nav .logo-dog {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-column: 5;
}
nav .action-btn {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column: 4;
}
</style>
