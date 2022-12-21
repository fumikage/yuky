<template>
    <modal
        name="edit-modal"
        class="modal-edit"
        styles="border-radius: 10px; background-color: #2b2d42; padding: 1% 1%"
        height="auto"
        width="50%"
        shiftX="0.5"
        shiftY="0.5"
        scrollable="true"
        ><div class="content">
            <div class="modal-nav">
                <div
                    class="nav-item"
                    :class="[{ active: categorieSelect[0] }]"
                    v-on:click="openEditModal(0)"
                >
                    <span class="nav-link">Résidence</span>
                </div>
                <div
                    class="nav-item"
                    :class="[{ active: categorieSelect[1] }]"
                    v-on:click="openEditModal(1)"
                >
                    <span class="nav-link">Animaux</span>
                </div>
                <div
                    class="nav-item"
                    :class="[{ active: categorieSelect[2] }]"
                    v-on:click="openEditModal(2)"
                >
                    <span class="nav-link">Autres</span>
                </div>
            </div>
            <div class="content" v-if="categorieSelect[0]">
                <div class="type-home">
                    <img
                        src="../../assets/img/home_disabled.svg"
                        v-if="habitation.type != 0"
                        v-on:click="habitation.type = 0"
                        class="type-image"
                    />
                    <img
                        src="../../assets/img/home_active.svg"
                        v-if="habitation.type == 0"
                        class="type-image"
                    />
                    <img
                        src="../../assets/img/appart_active.svg"
                        v-if="habitation.type == 1"
                        class="type-image"
                    />
                    <img
                        src="../../assets/img/appart_disabled.svg"
                        v-if="habitation.type != 1"
                        v-on:click="habitation.type = 1"
                        class="type-image"
                    />
                </div>
                <div class="slider-range">
                    <span class="surface-label">10 m²</span
                    ><vue-slider
                        v-model="habitation.surface"
                        width="60%"
                        :tooltip-formatter="habitation.surface + ' m²'"
                        :process-style="{ backgroundColor: '#D80032' }"
                        :tooltip-style="{
                            backgroundColor: '#D80032',
                            borderColor: '#D80032',
                        }"
                        tooltip="always"
                        min="10"
                        max="1000"
                    ></vue-slider>
                    <span class="surface-label">1000 m²</span>
                </div>
                <div class="photo-title"><span class="">Photos</span></div>
                <div class="c-flex-center">
                    <div class="c-flex-row custom-image-container">
                        <div
                            class="image-container"
                            v-for="(img, index) of habitationMedia.buffer"
                            :key="index"
                        >
                            <img :src="img" class="image-card" />
                            <div
                                :class="[
                                    { disabledMedia: disabledMedia[index] },
                                ]"
                                class="overlay"
                            ></div>
                            <button
                                v-if="disabledMedia[index] == false"
                                class="image-button"
                                v-on:click="deleteImage(index)"
                            >
                                Supprimer
                            </button>
                        </div>
                        <div class="image-container">
                            <input
                                type="file"
                                ref="file"
                                style="display: none"
                                @change="addFiles"
                                multiple
                                name="pictures"
                            />
                            <img
                                src="../../assets/img/add_image.svg"
                                class="image-card"
                                v-on:click="$refs.file.click()"
                            />
                        </div>
                    </div>
                </div>
                <div class="c-flex-row">
                    <button class="modal-button-2" v-on:click="hideModal">
                        Annuler</button
                    ><button class="modal-button-1" v-on:click="saveHome">
                        Sauvegarder les modifications
                    </button>
                </div>
            </div>
            <div class="content" v-if="categorieSelect[1]">
                <PetsSection
                    v-on:profil-update="profilUpdate"
                    v-on:hide-modal="hideModal"
                />
            </div>
            <div class="content" v-if="categorieSelect[2]">
                <OtherSection
                    v-on:profil-update="profilUpdate"
                    v-on:hide-modal="hideModal"
                />
            </div></div
    ></modal>
</template>
<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import PetsSection from "@/components/profil/PetsSection.vue";
import OtherSection from "@/components/profil/OtherSection.vue";
export default {
    props: [
        "state",
        "categorieSelect",
        "habitation",
        "habitationMedia",
        "disabledMedia",
    ],
    components: {
        VueSlider,
        PetsSection,
        OtherSection,
    },
    watch: {
        state: function () {
            this.$modal.show("edit-modal");
        },
    },
    methods: {
        openEditModal: function (el) {
            this.$emit("open", el);
        },
        profilUpdate: function () {
            this.$emit("profil-update");
        },
        hideModal: function () {
            this.$emit("hide-modal");
        },
        deleteImage: function (index) {
            this.$emit("delete-image", index);
        },
        saveHome: function () {
            this.$emit("save-home");
        },
        addFiles: function (event) {
            this.$emit("add-files", event);
        },
    },
};
</script>
<style scoped>
.modal-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.nav-item {
    color: #edf2f480;
    font-family: poppins-bold;
    font-size: 3vh;

    width: 20%;
    padding-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
}
.type-home {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.type-image {
    height: auto;
    width: 40%;
}
.slider-range {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-family: poppins-regular;
}
.surface-label {
    font-family: poppins-regular;
    font-size: 2vh;
    color: #edf2f480;
}
.photo-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 7%;
    font-family: poppins-regular;
    color: white;
}
.custom-image-container {
    justify-content: center;
    gap: 10px;
}

.modal-button-1 {
    background-color: #d80032;
    border: none;
    color: white;
    width: 60%;
    height: 50px;
    text-align: center;
    text-decoration: none;
    font-size: 0.8vw;
    border-radius: 40px;
    box-shadow: 0px 5px 6px #00000029;
    font-family: poppins-semibold;
    margin-top: 30px;
}
.modal-button-2 {
    background-color: rgba(237, 242, 244, 0.5);
    border: none;
    color: white;
    width: 30%;
    height: 50px;
    text-align: center;
    text-decoration: none;
    font-size: 0.8vw;
    border-radius: 40px;
    box-shadow: 0px 5px 6px #00000029;
    font-family: poppins-semibold;
    margin-top: 30px;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.5s ease;
    border-radius: 10px;
}

.image-container:hover .overlay {
    display: block;
    background: rgba(0, 0, 0, 0.3);
}
.disabledMedia {
    background: rgba(76, 76, 76, 0.918);
}

.image-container {
    width: 27%;
    height: 20%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image-button {
    position: absolute;
    opacity: 0;
    text-align: center;
    z-index: 1;
    border: 2px solid #d80032;
    border-radius: 20px;
    color: #d80032;
    background: rgba(0, 0, 0, 0);
    font-family: poppins-regular;
}

.image-container:hover .image-button {
    opacity: 1;
}
.image-card {
    width: 100%;
    height: 150px;
    border-radius: 10px;
}
.active {
    border-bottom: 4px solid #d80032;
    color: white;
}
</style>
