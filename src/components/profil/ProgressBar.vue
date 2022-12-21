<template>
    <div id="myProgress">
        <div id="myBar"></div>
    </div>
</template>
<script>
export default {
    props: ["state"],
    data: function () {
        return {
            elem: "",
            id: 0,
            i: 0,
            width: 0,
        };
    },
    watch: {
        state: function () {
            this.i = 0;
            if (this.i == 0) {
                this.i = 1;
                this.width = 0;
                setInterval(this.frame, 10);
            }
        },
        width: function () {
            this.$emit("change-value", this.width);
        },
    },
    methods: {
        frame: function () {
            let elem = document.getElementById("myBar");
            if (this.width >= 100) {
                this.i = 0;
            } else {
                this.width = this.width + 1;
                console.log("ttestt", this.width);
                elem.style.width = this.width + "%";
            }
        },
    },
};
</script>
<style>
#myProgress {
    width: 100%;
    background-color: rgba(237, 242, 244, 0.5);
    border-radius: 3px;
}

#myBar {
    width: 1%;
    height: 7px;
    background-color: #d80032;
    border-radius: 3px;
}
</style>
