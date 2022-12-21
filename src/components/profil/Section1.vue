<template>
    <div class="section">
        <div class="left">
            <div class="card">
                <div class="header profil-left">
                    <img
                        src="../../assets/img/edit_profil.svg"
                        class="edit-profil"
                        v-on:click="editProfilPicture"
                    />
                    <img
                        class="profil"
                        v-if="user.picture == ''"
                        :src="profilPicture"
                    />
                </div>
                <div class="name-section">
                    <span class="name"
                        >{{ user.firstName }} {{ user.lastName }}</span
                    >
                </div>
            </div>
        </div>
        <div class="right">
            <div class="top">
                <div class="card">
                    <div class="header-categorie">
                        <span class="text-categorie"
                            >Mon lieu de résidence</span
                        >
                        <img
                            v-on:click="openEditModal(0)"
                            class="icon-edit-categorie"
                            src="../../assets/img/edit_categorie.svg"
                        />
                    </div>
                    <div class="description-categorie">
                        <span class="title-categorie"
                            >{{ habitation.surface }} m²</span
                        >
                        <span class="type-categorie">en appartement</span>
                    </div>
                </div>
                <div class="card">
                    <div class="header-categorie">
                        <span class="text-categorie">Mes animaux acceptés</span>
                        <img
                            v-on:click="openEditModal(1)"
                            class="icon-edit-categorie"
                            src="../../assets/img/edit_categorie.svg"
                        />
                    </div>
                    <div class="description-categorie">
                        <span class="title-categorie">{{ number }} types</span>
                        <span class="type-categorie">animaux acceptés</span>
                    </div>
                </div>
                <div class="card">
                    <div class="header-categorie">
                        <span class="text-categorie"
                            >Mes infos supplémentaires</span
                        >
                        <img
                            v-on:click="openEditModal(2)"
                            class="icon-edit-categorie"
                            src="../../assets/img/edit_categorie.svg"
                        />
                    </div>
                    <div class="other-categorie">
                        <span class="type-categorie">
                            <img
                                src="../../assets/icon/error.svg"
                                class="other-icon"
                                v-if="!other.closed"
                            /><img
                                src="../../assets/icon/success.svg"
                                class="other-icon"
                                v-if="other.closed"
                            />
                            espace fermé</span
                        >
                        <span class="type-categorie">
                            <img
                                src="../../assets/icon/error.svg"
                                class="other-icon"
                                v-if="!other.room"
                            /><img
                                src="../../assets/icon/success.svg"
                                class="other-icon"
                                v-if="other.room"
                            />
                            pièce réservée</span
                        >
                        <span class="type-categorie">
                            <img
                                src="../../assets/icon/error.svg"
                                class="other-icon"
                                v-if="!other.kids"
                            /><img
                                src="../../assets/icon/success.svg"
                                class="other-icon"
                                v-if="other.kids"
                            />
                            enfants présents</span
                        >
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="card"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["user", "habitation", "profilPicture", "other", "number"],
    data: function () {
        return { pictureModal: false };
    },

    methods: {
        editProfilPicture: function () {
            this.$modal.show("picture-modal");
        },
        openEditModal: function (index) {
            this.$emit("open-modal", index);
        },
    },
};
</script>
<style>
.section .left {
    width: 536px;
    height: 852px;
    display: flex;
    justify-content: center;
}
.section .right {
    width: 950px;
    height: 852px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 19px;
}

.card {
    width: 100%;
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
}
.profil-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    margin-top: 50px;
}
.profil {
    width: 170px;
    height: 170px;
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
    margin-top: -130px;
    margin-left: 120px;
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
.other-icon {
    width: 24px;
    height: 24px;
}
.other-categorie {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-left: 35px;
    margin-top: 20px;
}
</style>
