<template>
    <div class="content">
        <span class="text">Animaux acceptés</span>
        <div class="c-flex-row">
            <button
                class="button-false"
                :class="[{ 'button-true': animauxAccepted.chien }]"
                v-on:click="animauxAccepted.chien = !animauxAccepted.chien"
            >
                Chien
                <img
                    src="../../assets/icon/success.svg"
                    v-if="animauxAccepted.chien"
                    class="img-badge"
                />
                <img
                    src="../../assets/icon/error.svg"
                    v-if="!animauxAccepted.chien"
                    class="img-badge"
                />
            </button>
            <button
                class="button-false"
                :class="[{ 'button-true': animauxAccepted.chat }]"
                v-on:click="animauxAccepted.chat = !animauxAccepted.chat"
            >
                Chat<img
                    src="../../assets/icon/success.svg"
                    v-if="animauxAccepted.chat"
                    class="img-badge"
                />
                <img
                    src="../../assets/icon/error.svg"
                    v-if="!animauxAccepted.chat"
                    class="img-badge"
                />
            </button>
            <button
                class="button-false"
                :class="[{ 'button-true': animauxAccepted.lapin }]"
                v-on:click="animauxAccepted.lapin = !animauxAccepted.lapin"
            >
                Lapin
                <img
                    src="../../assets/icon/success.svg"
                    v-if="animauxAccepted.lapin"
                    class="img-badge"
                />
                <img
                    src="../../assets/icon/error.svg"
                    v-if="!animauxAccepted.lapin"
                    class="img-badge"
                />
            </button>
        </div>
        <div class="c-flex-row">
            <button
                class="button-false"
                :class="[{ 'button-true': animauxAccepted.furet }]"
                v-on:click="animauxAccepted.furet = !animauxAccepted.furet"
            >
                Furet<img
                    src="../../assets/icon/success.svg"
                    v-if="animauxAccepted.furet"
                    class="img-badge"
                />
                <img
                    src="../../assets/icon/error.svg"
                    v-if="!animauxAccepted.furet"
                    class="img-badge"
                />
            </button>
            <button
                class="button-false"
                :class="[{ 'button-true': animauxAccepted.rongeurs }]"
                v-on:click="
                    animauxAccepted.rongeurs = !animauxAccepted.rongeurs
                "
            >
                Rongeurs<img
                    src="../../assets/icon/success.svg"
                    v-if="animauxAccepted.rongeurs"
                    class="img-badge"
                />
                <img
                    src="../../assets/icon/error.svg"
                    v-if="!animauxAccepted.rongeurs"
                    class="img-badge"
                />
            </button>
            <button
                class="button-false"
                :class="[{ 'button-true': animauxAccepted.oiseaux }]"
                v-on:click="animauxAccepted.oiseaux = !animauxAccepted.oiseaux"
            >
                Oiseaux<img
                    src="../../assets/icon/success.svg"
                    v-if="animauxAccepted.oiseaux"
                    class="img-badge"
                />
                <img
                    src="../../assets/icon/error.svg"
                    v-if="!animauxAccepted.oiseaux"
                    class="img-badge"
                />
            </button>
        </div>
        <div class="c-flex-row">
            <button
                class="button-false"
                :class="[{ 'button-true': animauxAccepted.reptiles }]"
                v-on:click="
                    animauxAccepted.reptiles = !animauxAccepted.reptiles
                "
            >
                Reptiles
                <img
                    src="../../assets/icon/success.svg"
                    v-if="animauxAccepted.reptiles"
                    class="img-badge"
                />
                <img
                    src="../../assets/icon/error.svg"
                    v-if="!animauxAccepted.reptiles"
                    class="img-badge"
                />
            </button>
            <button
                class="button-false"
                :class="[{ 'button-true': animauxAccepted.amphibiens }]"
                v-on:click="
                    animauxAccepted.amphibiens = !animauxAccepted.amphibiens
                "
            >
                Amphibiens
                <img
                    src="../../assets/icon/success.svg"
                    v-if="animauxAccepted.amphibiens"
                    class="img-badge"
                />
                <img
                    src="../../assets/icon/error.svg"
                    v-if="!animauxAccepted.amphibiens"
                    class="img-badge"
                />
            </button>
            <button
                class="button-false"
                :class="[{ 'button-true': animauxAccepted.poissons }]"
                v-on:click="
                    animauxAccepted.poissons = !animauxAccepted.poissons
                "
            >
                Poissons
                <img
                    src="../../assets/icon/success.svg"
                    v-if="animauxAccepted.poissons"
                    class="img-badge"
                />
                <img
                    src="../../assets/icon/error.svg"
                    v-if="!animauxAccepted.poissons"
                    class="img-badge"
                />
            </button>
        </div>
        <span class="text-info"
            ><img class="info-badge" src="../../assets/icon/info_circle.svg" />
            Informations sur les animaux domestiques autorisés</span
        >
        <span class="text">Animaux présents sur mon lieu de garde</span>
        <div class="c-flex-row-evenly">
            <span v-on:click="changeIndex('prev')"
                ><img src="../../assets/icon/arrow_left.svg"
            /></span>
            <div class="cards-section">
                <div
                    class="card c-flex-col"
                    v-for="pet of currentPets"
                    :key="pet.id"
                >
                    <div class="c-flex-row">
                        <span class="title-card">{{ pet.name }}</span>
                        <span class="text-card">{{ pet.species }}</span>
                    </div>
                    <div class="c-flex-row">
                        <span class="text-card">{{ pet.breed }}</span>
                        <span class="text-card">{{ pet.age }}</span>
                    </div>
                    <div class="c-flex-center">
                        <img
                            :src="pet.media"
                            class="pets-picture"
                            v-if="mediaUploaded"
                        />
                    </div>
                    <div>
                        <span class="text-card">{{ pet.description }}</span>
                    </div>
                </div>
            </div>
            <span v-on:click="changeIndex('next')"
                ><img src="../../assets/icon/arrow_right.svg"
            /></span>
        </div>

        <div class="btn-outline-white" v-on:click="addPetSection = true">
            <span class="icon-plus">+</span>
            <span>Ajouter un animal présent sur mon lieu de garde</span>
        </div>
        <div class="c-flex-col" v-if="addPetSection">
            <span class="text">Ajouter un animal présent</span>
            <div class="c-flex-row">
                <div class="c-flex-col">
                    <div class="c-flex-row">
                        <div class="c-flex-col">
                            <span class="label-input">nom</span
                            ><input class="form-modal" v-model="pet.name" />
                        </div>
                        <div class="c-flex-col">
                            <span class="label-input">espèce</span
                            ><input class="form-modal" v-model="pet.species" />
                        </div>
                    </div>
                    <div class="c-flex-row">
                        <div class="c-flex-col">
                            <span class="label-input">race</span
                            ><input class="form-modal" v-model="pet.breed" />
                        </div>
                        <div class="c-flex-col">
                            <span class="label-input">âge</span
                            ><input class="form-modal" v-model="pet.age" />
                        </div>
                    </div>
                    <div class="c-flex-row">
                        <div class="c-flex-col">
                            <span class="label-input">sexe</span>
                            <div class="c-flex-row">
                                <div
                                    v-on:click="pet.sex = 0"
                                    class="button-false-light"
                                    :class="[
                                        {
                                            'button-true-light': pet.sex == 0,
                                        },
                                    ]"
                                >
                                    <span
                                        class="button-text"
                                        :class="[
                                            {
                                                'button-text-true':
                                                    pet.sex == 0,
                                            },
                                        ]"
                                        >Femelle</span
                                    >
                                </div>
                                <div
                                    v-on:click="pet.sex = 1"
                                    class="button-false-light"
                                    :class="[
                                        {
                                            'button-true-light': pet.sex == 1,
                                        },
                                    ]"
                                >
                                    <span
                                        class="button-text"
                                        :class="[
                                            {
                                                'button-text-true':
                                                    pet.sex == 1,
                                            },
                                        ]"
                                        >Mâle</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!imageUploaded">
                    <input
                        type="file"
                        ref="file"
                        style="display: none"
                        @change="addFiles"
                        multiple
                        name="pictures"
                    />
                    <img
                        v-on:click="$refs.file.click()"
                        src="../../assets/img/add_pets_picture.svg"
                    />
                </div>
                <div v-if="imageUploaded" class="c-flex-col">
                    <div class="c-flex-center">
                        <img :src="localMedia" class="preview-pets" />
                    </div>
                    <div class="c-flex-row">
                        <button class="c-btn-primary btn-image">
                            Modifier la photo</button
                        ><button class="c-btn-secondary btn-image">
                            Annuler
                        </button>
                    </div>
                </div>
            </div>
            <div class="c-flex-row">
                <div class="c-flex-col">
                    <span class="label-input">description</span
                    ><textarea
                        class="form-textarea"
                        v-model="pet.description"
                    />
                </div>
            </div>
            <div class="c-flex-row-evenly">
                <span class="cancel-link" v-on:click="addPetSection = false"
                    >Annuler</span
                >
                <div v-on:click="addPet" class="btn-outline-light">
                    Ajouter cet animal
                </div>
            </div>
        </div>
        <div class="c-flex-row-evenly btn-modal-section">
            <button class="c-btn-secondary btn-modal" v-on:click="hideModal">
                Fermer</button
            ><button class="c-btn-primary btn-modal" v-on:click="saveUpdate">
                Sauvegarder les modifications
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            user: {},
            file: {},
            localMedia: {},
            imageUploaded: false,
            fileName: "",
            addPetSection: false,
            pets: [],
            currentPets: [],
            indexPet: 0,
            mediaUploaded: false,
            animauxAccepted: {
                chien: true,
                chat: true,
                lapin: true,
                furet: true,
                rongeurs: true,
                oiseaux: true,
                reptiles: true,
                amphibiens: true,
                poissons: true,
            },
            pet: {
                name: "",
                species: "",
                breed: "",
                age: "",
                sex: "",
                description: "",
            },
        };
    },
    async beforeMount() {
        this.user = this.$store.state.user.user;
        let response = await this.$store.dispatch("petsitter/getPetsitter", {
            userId: this.user.id,
        });
        if (response) {
            this.animauxAccepted = JSON.parse(response.pet_accepted);
        }
        this.getPets();
    },
    watch: {
        indexPet: function () {
            this.currentPets = [];
            for (let i = 0; i <= 2; i++)
                if (this.pets[this.indexPet + i]) {
                    this.currentPets.push(this.pets[this.indexPet + i]);
                }
        },
    },
    methods: {
        hideModal: async function () {
            this.$emit("hide-modal");
        },
        addPet: async function () {
            let petId = await this.$store.dispatch("pet/create", {
                pet: this.pet,
                userId: this.user.id,
            });
            if (this.imageUploaded) {
                await this.$store.dispatch("pet/saveMedia", {
                    id: this.user.id,
                    petId: petId.id,
                    files: this.file,
                });
            }
            this.addPetSection = false;
            this.getPets();
        },
        addFiles: function (event) {
            this.file = event.target.files[0];
            this.localMedia = URL.createObjectURL(event.target.files[0]);
            this.fileName = event.target.files[0].name;
            this.imageUploaded = true;
        },
        changeIndex: function (direction) {
            if (direction === "next") {
                if (this.pets.length != this.indexPet + 3) {
                    this.indexPet = this.indexPet + 1;
                }
            } else {
                if (this.indexPet != 0) {
                    this.indexPet = this.indexPet - 1;
                }
            }
        },
        getPets: async function () {
            this.pets = await this.$store.dispatch("pet/getPets", {
                id: this.user.id,
            });
            for (let i = 0; i <= 2; i++)
                if (this.pets[this.indexPet + i]) {
                    this.currentPets.push(this.pets[this.indexPet + i]);
                }

            let medias = await this.$store.dispatch("pet/getMediasPets", {
                id: this.user.id,
            });

            for (let index in this.pets) {
                if (medias[index] === "/image/pets.svg") {
                    this.pets[index].media = medias[index];
                } else {
                    this.pets[index].media =
                        "data:image/jpeg;base64," + medias[index];
                }
            }
            this.mediaUploaded = true;
        },
        saveUpdate: async function () {
            await this.$store.dispatch("petsitter/updatePetsitter", {
                userId: this.user.id,
                petAccepted: this.animauxAccepted,
            });
            let response = await this.$store.dispatch(
                "petsitter/getPetsitter",
                {
                    userId: this.user.id,
                }
            );

            this.animauxAccepted = JSON.parse(response.pet_accepted);

            this.$emit("profil-update");
        },
    },
};
</script>
<style scoped>
.button-false {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: rgba(255, 57, 57, 0.2);
    color: #ff3939;
    border: 5px solid #ff3939;
    border-radius: 10px;
    width: 32%;
    height: 70px;
    font-family: poppins-regular;
    font-size: 1.3em;
}
.button-true {
    background: rgba(135, 255, 126, 0.2);
    color: #87ff7e;
    border: 5px solid #87ff7e;
    border-radius: 10px;
}
.img-badge {
    height: 25px;
    width: 25px;
}
.text {
    font-family: poppins-regular;
    font-size: 1.5em;
    color: #edf2f4;
}
.text-info {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: poppins-regular;
    font-size: 1.1em;
    color: #edf2f4;
}
.info-badge {
    width: 20px;
    height: 20px;
}
.btn-outline-white {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 812px;
    height: 50px;

    border: 2px solid rgba(237, 242, 244, 0.3);
    border-radius: 10px;
    font-size: 20px;
    line-height: 30px;
    color: #edf2f4;
    font-family: poppins-regular;
    align-self: center;
}
.icon-plus {
    font-size: 40px;
}
.label-input {
    font-family: poppins-regular;
    font-size: 1.1em;
    color: #edf2f4;
}
.form-modal {
    border: 2px solid #8c8d9c;
    border-radius: 20px;
    background-color: #2b2d42;
    height: 50px;
    width: 260px;
    color: #fbfeff;
    font-family: poppins-light;
    font-size: 1.1vw;
    padding-left: 20px;
}
.form-textarea {
    border: 2px solid #8c8d9c;
    border-radius: 20px;
    background-color: #2b2d42;
    width: 812px;
    height: 110px;
    color: #fbfeff;
    font-family: poppins-light;
    font-size: 1.1vw;
    padding-left: 20px;
}
.button-false-light {
    border: 5px solid rgba(237, 242, 244, 0.5);
    border-radius: 10px;
    width: 260px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.button-true-light {
    background: rgba(237, 242, 244, 0.3);
    border: 5px solid #edf2f4;
}
.button-text {
    font-family: poppins-regular;
    font-size: 20px;
    color: rgba(237, 242, 244, 0.5);
}
.button-text-true {
    color: #edf2f4;
}
.preview-pets {
    height: 230px;
    width: 195px;
}
.btn-image {
    width: 150px;
    height: 30px;
    font-size: 15px;
}
.btn-modal {
    height: 50px;
    font-size: 0.8vw;
}
.cancel-link {
    font-family: poppins-bold;
    text-decoration: underline;
    color: white;
    font-size: 20px;
}
.btn-outline-light {
    border: 3px solid #edf2f4;
    filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
    border-radius: 40px;
    width: 536px;
    height: 70px;
    color: #edf2f4;
    font-family: poppins-regular;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-modal-section {
    margin-top: 20px;
}
.cards-section {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 16px;
}
.card {
    width: 240px;
    height: 316px;
    padding: 15px;
}
.title-card {
    font-family: poppins-semibold;
    font-size: 20px;
    color: #edf2f4;
}
.text-card {
    font-family: poppins-regular;
    font-size: 20px;
    color: #edf2f4;
    font-size: 12px;
}
.pets-picture {
    width: 220px;
    height: 170px;
    border-radius: 10px;
}
</style>
