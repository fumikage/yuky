<template>
    <div class="sidebar">
        <div
            class="sidebar-item item-0"
            :class="[{ 'sidebar-item-active': menuSelect[0] }]"
            v-on:click="menuSelect = [true, false, false]"
        >
            <div v-if="!menuSelect[0]" class="circle-hover item-0"></div>
            <img
                src="../../../assets/icon/user_circle.svg"
                class="circle-image"
            />
            <span class="sidebar-text" v-if="menuSelect[0]"
                >Infos et Gardes</span
            >
        </div>
        <div
            class="sidebar-item item-1"
            :class="[{ 'sidebar-item-active': menuSelect[1] }]"
            v-on:click="menuSelect = [false, true, false]"
        >
            <div v-if="!menuSelect[1]" class="circle-hover item-1"></div>
            <img
                src="../../../assets/icon/euro_circle.svg"
                class="circle-image"
            />
            <span
                class="sidebar-text"
                :class="[{ 'sidebar-text-active': menuSelect[1] }]"
                v-if="menuSelect[1]"
                >Tarifs et Factures</span
            >
        </div>
        <div
            class="sidebar-item item-2"
            :class="[{ 'sidebar-item-active': menuSelect[2] }]"
            v-on:click="menuSelect = [false, false, true]"
        >
            <div v-if="!menuSelect[2]" class="circle-hover item-2"></div>
            <img
                src="../../../assets/icon/info_circle.svg"
                class="circle-image"
            />
            <span class="sidebar-text" v-if="menuSelect[2]">Infos légales</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ["menuSelect"],
    watch: {
        menuSelect: function () {
            this.$emit("menu-select", this.menuSelect);
        },
    },
};
</script>
<style scoped>
.sidebar-item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;
    width: 100px;
}
.circle-hover {
    position: absolute;
    opacity: 0%;
    z-index: 0;
    background-color: rgba(216, 0, 50, 0.3);
    border-radius: 50%;
    height: 30px;
    width: 30px;
}
.sidebar .item-0:hover .circle-hover.item-0 {
    opacity: 100%;
    transition: width 0.8s, height 0.8s;
    height: 100px;
    width: 100px;
}
.sidebar .item-1:hover .circle-hover.item-1 {
    opacity: 100%;
    transition: width 0.8s, height 0.8s;
    height: 100px;
    width: 100px;
}
.sidebar .item-2:hover .circle-hover.item-2 {
    opacity: 100%;
    transition: width 0.8s, height 0.8s;
    height: 100px;
    width: 100px;
}

.sidebar-item-active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15%;
    border-radius: 15px;
    background-color: rgba(216, 0, 50, 0.3);
}
.sidebar-item-active:hover {
    border-radius: 15px;
}
.sidebar-text {
    color: white;
    font-family: poppins-regular;
    font-size: 1.5vh;
}

.circle-image {
    width: 50%;
    z-index: 1;
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
    height: 100%;
    width: 32%;
    display: flex;
    flex-direction: column;
}
.bottom .card {
    width: 100%;
    height: 100%;
}
.header-categorie {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 10%;
}
.text-categorie {
    font-family: poppins-regular;
    font-size: 1.5vh;
    color: white;
}
.title-categorie {
    font-family: poppins-bold;
    color: white;
    font-size: 6vh;
}
.type-categorie {
    font-family: poppins-regular;
    color: white;
    font-size: 2.5vh;
}
.description-categorie {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;
}
.icon-edit-categorie {
    cursor: pointer;
}
.content {
    display: flex;
    flex-direction: column;
}
</style>
