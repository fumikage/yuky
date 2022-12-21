<template>
    <div class="container">
        <ModalProfilEdit
            :state="openNavbar"
            :categorieSelect="categorieSelect"
            :habitation="habitation"
            :habitationMedia="habitationMedia"
            :disabledMedia="disabledMedia"
            v-on:open="openEditModal"
            v-on:hide-modal="hideModal"
            v-on:delete-image="deleteImage"
            v-on:save-home="saveHome"
            v-on:add-files="addFiles"
            v-on:profil-update="getProfilInfo"
        />
        <ModalProfilPictureEdit
            :user="user"
            v-on:get-profil-picture="getProfilPicture"
        />
        <Navbar v-on:change="change" />
        <div v-if="state == 0" class="main">client</div>
        <div v-if="state == 1" class="main">
            <Sidebar
                :menuSelect="menuSelect"
                v-on:menu-select="changeMenuSelect"
            />
            <div clas="sections" data-scroll-container>
                <div class="section" id="section-1" data-scroll>
                    <Section1
                        :user="user"
                        :habitation="habitation"
                        :other="other"
                        :number="numberPets"
                        :profilPicture="profilPicture"
                        v-on:open-modal="openEditModal"
                    />
                </div>
                <div class="section" id="section-2" data-scroll>section 2</div>
                <div class="section" id="section-3" data-scroll>section 3</div>
            </div>
        </div>
    </div>
</template>
<script>
import LocomotiveScroll from "locomotive-scroll";

//Component
import Navbar from "@/components/layouts/profil/Navbar.vue";
import ModalProfilEdit from "@/components/modal/ProfilEdit.vue";
import ModalProfilPictureEdit from "@/components/modal/ProfilPictureEdit.vue";
import Sidebar from "@/components/layouts/profil/Sidebar.vue";
import Section1 from "@/components/profil/Section1.vue";

export default {
    name: "Profil",
    components: {
        Navbar,
        Sidebar,
        ModalProfilEdit,
        Section1,
        ModalProfilPictureEdit,
    },
    data: function () {
        return {
            scroll: "",
            openNavbar: false,
            state: 1,
            user: {},
            habitation: {},
            categorieSelect: [false, false, false],
            menuSelect: [true, false, false],
            localMedia: [],
            habitationMedia: [],
            deleteMediaList: [],
            disabledMedia: [],
            profilPicture: "",
            numberPets: "",
            other: {},
        };
    },
    async beforeMount() {
        this.user = this.$store.state.user.user;

        this.getProfilPicture();

        await this.generateMedia();
        this.scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
        });
        this.getProfilInfo();
    },
    watch: {
        menuSelect: function () {
            let target = {};
            if (this.menuSelect[0]) {
                target = document.querySelector("#section-1");
            } else if (this.menuSelect[1]) {
                target = document.querySelector("#section-2");
            } else if (this.menuSelect[2]) {
                target = document.querySelector("#section-3");
            }

            this.scroll.scrollTo(target);
        },
    },
    methods: {
        getProfilInfo: async function () {
            this.habitation = await this.$store.dispatch("habitation/get", {
                id: this.user.id,
            });
            let response = await this.$store.dispatch(
                "petsitter/getPetsitter",
                {
                    userId: this.user.id,
                }
            );
            if (response) {
                this.other = JSON.parse(response.other);
                this.numberPets = 0;
                let pet = JSON.parse(response.pet_accepted);

                for (let element in pet) {
                    if (pet[element]) {
                        this.numberPets = this.numberPets + 1;
                    }
                }
            }
        },
        changeMenuSelect(menuselect) {
            this.menuSelect = menuselect;
        },
        change: function (el) {
            this.state = el;
        },
        openEditModal: function (el) {
            this.openNavbar != false;
            this.$modal.show("edit-modal");
            this.categorieSelect = [false, false, false];
            this.categorieSelect[el] = true;
        },
        hideModal: function () {
            this.$modal.hide("edit-modal");
        },
        addFiles: function (event) {
            console.log("test", event);
            this.localMedia = event.target.files;
        },
        saveHome: async function () {
            console.log(this.deleteMediaList);
            let deleteMediaList = [];
            for (let element of this.deleteMediaList) {
                deleteMediaList.push(element);
            }

            deleteMediaList = this.deleteMediaList;
            await this.$store.dispatch("habitation/updateHabitation", {
                id: this.habitation.id,
                address: this.habitation.address,
                type: this.habitation.type,
                surface: this.habitation.surface,
                files: this.localMedia,
                deleteFiles: deleteMediaList,
                userId: this.user.id,
            });
            this.generateMedia();
        },
        generateMedia: async function () {
            let habitationMedia = await this.$store.dispatch(
                "habitation/getMedia",
                {
                    id: this.user.id,
                }
            );
            this.habitationMedia = { buffer: [], name: [] };
            for (let element of habitationMedia.arrayBuffer) {
                this.habitationMedia.buffer.push(
                    "data:image/jpeg;base64," + element
                );
                this.disabledMedia.push(false);
            }
            this.habitationMedia.filename = habitationMedia.arrayFilename;
        },
        deleteImage: async function (index) {
            this.deleteMediaList.push(this.habitationMedia.filename[index]);
            this.$set(this.disabledMedia, index, true);
        },
        getProfilPicture: async function () {
            let profilPicture = await this.$store.dispatch(
                "user/getProfilPicture",
                {
                    id: this.user.id,
                }
            );
            if (profilPicture.state) {
                this.profilPicture =
                    "data:image/jpeg;base64," + profilPicture.buffer;
            } else {
                this.profilPicture = "/image/profil.png";
            }
        },
    },
};
</script>
<style scoped>
.container {
    background-color: #2b2d42;
    min-height: 1080px;
    max-width: 1920px;
    padding: 0;
    margin: auto;
}
.main {
    display: flex;
    flex-direction: row;
    justify-content: space-arround;
    width: 100%;
    height: 100%;
    gap: 19px;
}
.main .sidebar {
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    padding-top: 107px;
}
.main .sections {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.section {
    width: 100%;
    height: 1080px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 19px;
}
#section-1,
#section-2,
#section-3 {
    padding-top: 107px;
}
</style>
