<template>
  <div class="container">
    <Navbar />
    <modal
      name="login-modal"
      class="modal-login"
      styles="border-radius: 10px; background-color: #2b2d42; padding: 1% 1%"
      height="auto"
      shiftX="0.5"
      shiftY="0.5"
      scrollable="true"
      ><div class="content">
        <div class="modal-nav">
          <div
            class="underline-nav"
            :class="[{ active: modalNavActive.connexion }]"
            v-on:click="switchModalNav('connexion')"
          >
            <h2
              class="navTitle"
              :class="[{ active: modalNavActive.connexion }]"
            >
              Connexion
            </h2>
          </div>
          <div
            v-on:click="switchModalNav('inscription')"
            class="underline-nav"
            :class="[{ active: modalNavActive.inscription }]"
          >
            <h2
              class="navTitle"
              :class="[{ active: modalNavActive.inscription }]"
            >
              Inscription
            </h2>
          </div>
        </div>
        <div class="forms-login" v-if="modalNavActive.inscription">
          <label>prénom</label
          ><input class="form-modal" type="text" v-model="loginMail" />
          <label>nom</label
          ><input class="form-modal" type="text" v-model="loginMail" />
          <label>adresse mail</label
          ><input class="form-modal" type="email" v-model="loginPassword" />
          <label>mot de passe</label
          ><input class="form-modal" type="password" v-model="loginPassword" />
          <label>confirmation mot de passe</label
          ><input class="form-modal" type="password" v-model="loginPassword" />
          <label>date de naissance</label
          ><input class="form-modal" type="password" v-model="loginPassword" />
          <label>numéro de téléphone</label
          ><input class="form-modal" type="password" v-model="loginPassword" />
          <label>Sexe</label
          ><input class="form-modal" type="select" v-model="loginPassword" />
          <button class="btn modal">CONNEXION</button>
        </div>
        <div class="forms-login" v-if="modalNavActive.connexion">
          <label>adresse mail</label
          ><input class="form-modal" type="email" v-model="loginMail" />
          <label>mot de passe</label
          ><input class="form-modal" type="password" v-model="loginPassword" />
          <button class="btn modal" v-on:click="login">CONNEXION</button>
        </div>
      </div>
    </modal>
    <div class="main">
      <div class="panel-container">
        <h1 class="title1">
          Trouver la personne pour garder mon animal de compagnie
        </h1>
        <p class="subtitle1">
          Aidez-nous à trouver le parfait dogsitter pour votre animal en nous
          donnant quelques informations
        </p>
        <Panel />
      </div>
      <div class="communauty-title">
        <h1 class="title1">
          Vous êtes passioné par les animaux et souhaitez proposer vos services
          de gardiennage ?
        </h1>
      </div>
      <div class="communauty">
        <div class="left">
          <img src="@/assets/img/img_section_recherche.png" />
        </div>
        <div class="right">
          <h2 class="subtitle2">Rejoigner notre communauté !</h2>
          <p class="description1">
            Vous êtes déjà plus de <span class="color-text">10 000</span> à nous
            avoir rejoint !
          </p>
          <button class="btn" v-on:click="openModal">Créer mon profil</button>
        </div>
      </div>
      <div class="card-section">
        <div class="fond-title">
          <h3 class="title3">
            Partez dès maintenant en toute sérénité. Nous nous occupons de vos
            animaux.
          </h3>
        </div>
        <div class="cards">
          <div class="container-card">
            <div class="card-left">
              <span class="card-title1">Pratique</span>
              <span class="card-text1">
                Trouvez dès maintenant un petsitter qui prendra soin de vos
                animaux pendant vos périodes d'absences.
              </span>
            </div>
            <div class="card-center">
              <span class="card-title2">Rapide</span>
              <span class="card-text2">
                Trouvez le petsitter idéal ! Indiquez la période de garde, nos
                adhérents se tiennent disponibles pour garder vos animaux.
              </span>
            </div>

            <div class="card-right">
              <span class="card-title1">Direct</span>
              <span class="card-text1">
                Vous pouvez contacter et indiquer à votre petsitter les
                préconisations relatives à la garde de vos animaux.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="communauty2">
        <div class="title">
          <h1 class="title-communauty2">Ce qui va vous plaire</h1>
        </div>
        <div class="cards">
          <div class="container-card">
            <div class="card-left no-image">
              <span class="card-title2">Le choix</span>
              <span class="card-text2">
                Garde à domicile, chez le petsitter ou visites et promenades,
                vous trouvez le service dont vous avez besoin.
              </span>
            </div>
            <div class="card-center no-image">
              <span class="card-title1">La communauté</span>
              <span class="card-text1">
                Nous veillons à ce que nos petsitters soient au top ! Nous avons
                à cœur de vous proposer des personnes passionnées et compétentes
                qui sauront prendre soin de vos animaux.
              </span>
            </div>

            <div class="card-right no-image">
              <span class="card-title2">Direct</span>
              <span class="card-text2">
                Payez directement sur notre plateforme sécurisée, facilitez vos
                échanges avec nos petsitters et organisez votres service de
                garde.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="miouvelles">
        <div class="fond-title miouvelles">
          <h3 class="title3">Les dernières Miouvelles</h3>
        </div>
      </div>
      <div class="footer">
        <div class="footer-left">
          <div class="footer-column">
            <span class="footer-text">Nous contacter</span
            ><span class="footer-text">informations légales</span
            ><span class="footer-text">Politique de confidentialité</span>
          </div>
          <div class="footer-column">
            <span class="footer-text">Foire aux questions</span
            ><span class="footer-text">Devenir petsitter ?</span
            ><span class="footer-text">Qui sommes-nous ?</span>
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-column">
            <img src="@/assets/img/logo_header.svg" class="footer-img" />
            <div class="footer-logo-div">
              <img src="@/assets/img/instagram.png" class="footer-logo" />
              <img src="@/assets/img/twitter.png" class="footer-logo" />
              <img src="@/assets/img/facebook.png" class="footer-logo" />
            </div>
            <span class="footer-yuky">@yuky 2022</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Panel from "@/components/home/Panel.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Panel,
  },
  data: function () {
    return {
      loginMail: "theocherblanc@gmail.com",
      loginPassword: "",
      modalNavActive: {
        connexion: true,
        inscription: false,
      },
    };
  },
  methods: {
    openModal: function () {
      console.log("test");
      this.$modal.show("login-modal");
    },
    switchModalNav: function (nav) {
      this.modalNavActive = {
        connexion: false,
        inscription: false,
      };
      if (nav == "connexion") {
        this.modalNavActive.connexion = true;
      } else if (nav == "inscription") {
        this.modalNavActive.inscription = true;
      }
    },
    login: async function () {
      if (
        await this.$store.dispatch("user/login", {
          mail: this.loginMail,
          password: this.loginPassword,
        })
      ) {
        this.$modal.hide("login-modal");
      }
    },
  },
};
</script>
<style>
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1920px;
    min-height: 100%;
    padding: 0;
    margin: auto;
    background-color: #2b2d42;
    background-image: url(../assets/img/wavenavbar.png),
      url(../assets/img/graphic_home1.png), url(../assets/img/graphic_home2.png),
      url(../assets/img/graphic_pratique_rapide.png),
      url(../assets/img/graphic_miouvelles.png),
      url(../assets/img/chien_fond_onepage.png),
      url(../assets/img/fond_onepage.png),
      url(../assets/img/img_fond_section_communauté.png),
      url(../assets/img/fond_onepage.png);

    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat,
      no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 534px 101px, 400px 750px, 842px 1253px, 100%, 2183px 1231px,
      689px 992px, 100%, 100%, 100%;
    background-position: 21% 0%, 0px 401px, 1200px 320px, 0px 2000px, 0px 3900px,
      1400px 120px, 0% 0%, 0px 3100px, 0px 4400px;
  }
  .main .communauty2 {
    grid-row: 8;
    grid-column: 1/13;
  }
  .communauty2 .title {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .title-communauty2 {
    grid-column: 2/6;

    font-family: poppins-extrabold;
    color: #fbfeff;
    font-size: 55px;
    margin: 5px;
    padding-bottom: 50px;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 3fr 6fr 9fr 5fr 6fr 7fr 13fr 11fr 17fr 3fr 1fr;
  }
  .main .panel-container {
    margin-bottom: 5em;
    grid-column: 3/10;
    grid-row: 2;
  }
  .main .communauty-title {
    grid-column: 2/8;
    grid-row: 4;
  }
  .main .communauty {
    grid-row: 5;
    grid-column: 2/13;
    display: grid;
    grid-template-columns: 45% 55%;
  }
  .main .card-section {
    grid-row: 7;
    grid-column: 1/13;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .main .miouvelles {
    grid-row: 9;
    grid-column: 1/13;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .main .footer {
    grid-row: 10;
    grid-column: 1/13;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .footer-left {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-arround;
  }
  .footer-right {
    width: 40%;
    height: 100%;
    border-left: 4px #edf2f4 solid;
    line-height: 10px;
    display: flex;
    justify-content: center;
  }
  .footer-column {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 50%;
  }
  .footer-text {
    display: flex;
    font-family: poppins-regular;
    font-size: 20px;
    color: #edf2f4;
    padding-left: 50px;
    justify-content: flex-start;
  }
  .footer-img {
    width: 108px;
    height: 62px;
  }
  .footer-logo {
    width: 50px;
    height: 50px;
  }
  .footer-logo-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
  .footer-yuky {
    color: #fbfeff;
    font-family: poppins-regular;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: 335px;
  }
  .container-card {
    display: flex;
    gap: 16px;
    grid-column: 2;
  }
  .card-left {
    background-image: url(../assets/img/fond_carte_pratique.png);
    background-position: -50px 0px;

    display: flex;
    flex-direction: column;
    border-radius: 20px;
  }
  .card-center {
    background-image: url(../assets/img/fond_carte_rapide.png);
    background-position: -50px 0px;
    background-size: 700px;

    display: flex;
    flex-direction: column;
    border-radius: 20px;
  }
  .card-right {
    background-image: url(../assets/img/fond_carte_direct.png);
    background-position: -50px 0px;

    display: flex;
    flex-direction: column;
    border-radius: 20px;
  }
  .card-left.no-image,
  .card-right.no-image {
    background: #d80032;
  }
  .card-center.no-image {
    background: #edf2f4;
  }

  .card-title1 {
    font-family: poppins-bold;
    font-size: 50px;
    color: #2b2d42;
    padding-left: 50px;
    margin-top: 30px;
  }
  .card-text1 {
    font-family: poppins-regular;
    font-size: 25px;
    color: #2b2d42;
    display: flex;
    padding-left: 50px;
  }
  .card-text2 {
    font-family: poppins-regular;
    font-size: 25px;
    color: #edf2f4;
    padding-left: 50px;
  }
  .card-title2 {
    font-family: poppins-bold;
    font-size: 50px;
    color: #edf2f4;
    padding-left: 50px;
    margin-top: 30px;
  }

  .fond-title {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 83px 29px #00000029;
    border-radius: 78px;
    opacity: 1;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    height: 103px;
    width: 1640px;
  }
  .fond-title.miouvelles {
    height: 103px;
    width: 536px;
  }
  .title3 {
    font-size: 30px;
    font-family: poppins-semibold;
    color: #2b2d42;
    text-align: center;
  }
  .title1 {
    font-family: poppins-extrabold;
    color: #fbfeff;
    font-size: 55px;
    margin: 5px;
  }
  .subtitle1 {
    font-family: poppins-regular;
    font-size: 20px;
    max-width: 552px;
    color: #fbfeff;
    margin: 5px;
  }
  .subtitle2 {
    font-family: poppins-bold;
    color: #fbfeff;
    font-size: 50px;
    margin: 5px;
  }
  .description1 {
    font-family: poppins-regular;
    color: #fbfeff;
    font-size: 20px;
    margin: 5px;
  }
  .color-text {
    color: #d80032;
    font-family: poppins-bold;
  }
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
    margin-top: 30px;
  }
  .modal-login {
    border-radius: 20px !important;
  }
  .modal-login.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .modal-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .navTitle {
    font-size: 30px;
    color: #edf2f4;
    opacity: 0.5;
    font-family: poppins-regular;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .navTitle.active {
    cursor: text;
    opacity: 1;
  }
  .underline-nav {
    padding-left: 10px;
    padding-right: 10px;
  }
  .underline-nav.active {
    border-bottom: 3px solid #d80032;
  }
  .forms-login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 2em;
  }
  label {
    color: #fbfeff;
    font-family: poppins-light;
    font-size: 20px;
  }
  .form-modal {
    border: 2px solid #8c8d9c;
    border-radius: 20px;
    background-color: #2b2d42;
    height: 50px;
    color: #fbfeff;
    font-family: poppins-light;
    font-size: 20px;
    padding-left: 20px;
  }
  .form-modal:focus {
    outline-color: #edf2f4;
  }
  .btn.modal {
    width: 100%;
  }
}
</style>
