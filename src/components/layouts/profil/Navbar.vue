<template>
    <nav>
        <div class="main">
            <div class="logo"><img src="@/assets/img/logo_header.svg" /></div>
            <span
                class="link1"
                :class="[{ activeLink: isActive[0] }]"
                v-on:click="active(0)"
                >Profil client
            </span>

            <span
                class="link2"
                :class="[{ activeLink: isActive[1] }]"
                v-on:click="active(1)"
                >Profil petsitter
            </span>

            <div class="logo-dog">
                <img src="@/assets/img/badge_profil.png" />
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data: function () {
        return {
            isActive: [true, false],
        };
    },
    methods: {
        goCreate: function () {
            this.$router.push({ name: "Register1" });
        },
        goLogin: function () {
            this.$router.push({ name: "Login" });
        },
        active: function (el) {
            this.isActive = [false, false];
            this.isActive[el] = true;
            this.$emit("change", el);
        },
    },
};
</script>
<style scoped>
.active {
    color: white;
}
nav {
    height: 107px;
    background-color: #2b2d42;
    z-index: 100;
    width: 100%;
    position: fixed;
}
nav .main {
    display: grid;
    grid-template-columns: 20% 40% 10% 10% 10% 10%;
    height: 100%;
}

nav .link1 {
    display: flex;
    color: #edf2f480;
    font-family: poppins-semibold;
    font-size: 15px;
    flex-grow: 1;
    grid-column: 3;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
}
nav .link2 {
    display: flex;
    color: #edf2f480;
    font-family: poppins-semibold;
    font-size: 15px;
    flex-grow: 1;
    grid-column: 4;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
}
nav .activeLink {
    color: white;
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
    grid-column: 6;
}
nav .action-btn {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-column: 4;
}
</style>
