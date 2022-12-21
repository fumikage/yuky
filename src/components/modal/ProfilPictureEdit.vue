<template>
    <modal
        name="picture-modal"
        class="modal-edit"
        styles="border-radius: 10px; background-color: #2b2d42; padding: 1% 1%"
        height="auto"
        width="50%"
        shiftX="0.5"
        shiftY="0.5"
        scrollable="true"
        ><div class="content">
            <div class="header">
                <span class="modal-title">Changez votre photo de profil</span
                ><span class="modal-text"
                    >Types de fichiers acceptés: .jpg .png de 5 Mo</span
                >
            </div>
            <div class="c-flex-center" v-if="!imageUploaded">
                <input
                    type="file"
                    ref="file"
                    style="display: none"
                    @change="addFiles"
                    multiple
                    name="pictures"
                />
                <img
                    src="../../assets/img/add_profil_picture.svg"
                    v-on:click="$refs.file.click()"
                />
            </div>
            <div class="c-flex-center" v-if="imageUploaded">
                <img :src="localMedia" class="preview-profil" />
            </div>
            <div class="c-flex" v-show="imageUploadedStart">
                <span class="modal-text-2">Fichier téléchargé</span>
                <div class="c-flex-row no-spaced">
                    <img src="../../assets/icon/file.svg" />
                    <div class="c-flex-col full-width">
                        <div class="spaced">
                            <span class="file-name">{{ fileName }}</span>
                            <span class="pourcentage"
                                >{{ progressValue }} %</span
                            >
                        </div>
                        <ProgressBar
                            :state="progressState"
                            :width="progressValue"
                            v-on:change-value="changeValue"
                        />
                    </div>
                    <img src="../../assets/icon/success.svg" />
                </div>
            </div>
            <div class="c-flex-row button-row">
                <button class="secondary" v-on:click="cancelEdit">
                    Rétablir</button
                ><button class="primary" v-on:click="save">
                    Sauvegarder cette photo de profil
                </button>
            </div>
        </div></modal
    >
</template>
<script>
import ProgressBar from "@/components/profil/ProgressBar.vue";

export default {
    props: ["state", "user"],
    data: function () {
        return {
            localMedia: {},
            file: {},
            imageUploaded: false,
            imageUploadedStart: false,
            fileName: "",
            progressState: 0,
            progressValue: 0,
        };
    },
    components: {
        ProgressBar,
    },
    watch: {
        state: function () {
            this.$modal.show("edit-modal");
        },
    },
    methods: {
        addFiles: function (event) {
            this.file = event.target.files[0];
            this.imageUploadedStart = true;
            this.progressState = 1;
            this.localMedia = URL.createObjectURL(event.target.files[0]);
            console.log(event.target.files[0]);
            this.fileName = event.target.files[0].name;
            this.imageUploaded = true;
        },
        changeValue: function (width) {
            this.progressValue = width;
        },
        cancelEdit: function () {
            (this.imageUploadedStart = false), (this.progressState = 0);
            this.localMedia = "";
            this.fileName = "";
            this.imageUploaded = false;
        },
        save: function () {
            this.$store.dispatch("user/saveProfilPicture", {
                id: this.user.id,
                files: this.file,
            });
            this.$modal.hide("picture-modal");
            this.$emit("get-profil-picture");
        },
    },
};
</script>
<style>
.full-width {
    width: 80%;
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    gap: 30px;
}
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.modal-title {
    color: white;
    font-family: poppins-bold;
    font-size: 2em;
}
.modal-text {
    color: #edf2f4;
    font-family: poppins-regular;
    font-size: 0.8em;
}
.modal-text-2 {
    color: #edf2f4;
    font-family: poppins-regular;
    font-size: 1.2em;
}
.preview-profil {
    width: 170px;
    height: 170px;
    border-radius: 50%;
}
.spaced {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}
.no-spaced {
    justify-content: space-around;
}
.file-name {
    color: white;
    font-family: poppins-bold;
    font-size: 1.4em;
}
.pourcentage {
    color: #edf2f4;
    font-family: poppins-regular;
    font-size: 1.5em;
}
button.secondary {
    width: 260px;
    height: 70px;
    background: rgba(237, 242, 244, 0.5);
    border-radius: 40px;
    font-family: poppins-regular;
    font-size: 20px;
    color: white;
    border: 0px solid #edf2f480;
}
button.primary {
    width: 536px;
    height: 70px;
    background: #d80032;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
    border: 2px solid #d80032;
    border-radius: 40px;
    font-family: poppins-regular;
    font-size: 20px;
    color: white;
}
.button-row {
    justify-content: space-evenly;
}
</style>
