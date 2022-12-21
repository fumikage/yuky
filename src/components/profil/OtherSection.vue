<template>
    <div class="content">
        <span class="title">Enfants présents</span>
        <div class="c-flex-row">
            <span class="text"
                >Je possède un ou des enfants présents durant la garde</span
            >
            <div class="c-flex-row">
                <div
                    v-on:click="other.kids = true"
                    class="btn-disabled-true"
                    :class="[{ activetrue: other.kids }]"
                >
                    OUI
                </div>
                <div
                    v-on:click="other.kids = false"
                    class="btn-disabled-false"
                    :class="[{ activefalse: !other.kids }]"
                >
                    NON
                </div>
            </div>
        </div>
        <span class="title">Pièce réservée</span>
        <div class="c-flex-row">
            <span class="text"
                >J'ai une piéce équipée et reservée pour les animaux que je
                garde</span
            >
            <div class="c-flex-row">
                <div
                    v-on:click="other.room = true"
                    class="btn-disabled-true"
                    :class="[{ activetrue: other.room }]"
                >
                    OUI
                </div>
                <div
                    v-on:click="other.room = false"
                    class="btn-disabled-false"
                    :class="[{ activefalse: !other.room }]"
                >
                    NON
                </div>
            </div>
        </div>
        <span class="title">Espace fermé</span>
        <div class="c-flex-row">
            <span class="text"
                >Je peux garder fermée mon habitation durant la garde</span
            >
            <div class="c-flex-row">
                <div
                    v-on:click="other.closed = true"
                    class="btn-disabled-true"
                    :class="[{ activetrue: other.closed }]"
                >
                    OUI
                </div>
                <div
                    v-on:click="other.closed = false"
                    class="btn-disabled-false"
                    :class="[{ activefalse: !other.closed }]"
                >
                    NON
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
            other: {
                kids: false,
                room: false,
                closed: false,
            },
            user: {},
        };
    },
    async beforeMount() {
        this.user = this.$store.state.user.user;
        let response = await this.$store.dispatch("petsitter/getPetsitter", {
            userId: this.user.id,
        });
        if (response) {
            this.other = JSON.parse(response.other);
        }
    },
    methods: {
        hideModal: async function () {
            this.$emit("hide-modal");
        },
        saveUpdate: async function () {
            console.log("other", this.other);
            await this.$store.dispatch("petsitter/updatePetsitter", {
                userId: this.user.id,
                other: JSON.stringify(this.other),
            });

            let response = await this.$store.dispatch(
                "petsitter/getPetsitter",
                {
                    userId: this.user.id,
                }
            );

            this.other = JSON.parse(response.other);

            this.$emit("profil-update");
        },
    },
};
</script>

<style>
.title {
    color: #edf2f4;
    font-size: 20px;
    font-family: poppins-regular;
}
.text {
    font-size: 30px;
    color: #edf2f4;
    font-family: poppins-semibold;
    width: 536px;
}
.btn-disabled-true {
    border: 5px solid rgba(135, 255, 126, 0.2);
    border-radius: 10px;
    width: 125px;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: rgba(135, 255, 126, 0.2);
    font-family: poppins-semibold;
    font-size: 30px;
    cursor: pointer;
}
.btn-disabled-false {
    border: 5px solid rgba(255, 57, 57, 0.2);
    border-radius: 10px;
    width: 125px;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: rgba(255, 57, 57, 0.2);
    font-family: poppins-semibold;
    font-size: 30px;
    cursor: pointer;
}
.activetrue {
    background: rgba(135, 255, 126, 0.2);
    color: #87ff7e;
    border: 5px solid #87ff7e;
}
.activefalse {
    background: rgba(255, 57, 57, 0.2);
    color: #ff3939;
    border: 5px solid #ff3939;
}
</style>
