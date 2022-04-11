<template>
  <div class="panel">
    <div id="select1">
      <button
        v-on:click="placeOpen = !placeOpen"
        :class="[{ active: placeOpen }, 'placeButton']"
      >
        <div :class="[{ active: placeOpen }, 'top']">
          <div :class="[{ active: placeOpen }, 'default']">
            <span>A mon domicile</span
            ><span
              ><b-icon-chevron-down
                :class="['rotate', { active: placeOpen }]"
              ></b-icon-chevron-down
            ></span>
          </div>
        </div>
        <div :class="[{ active: placeOpen }, 'optionPlace']">
          <span :class="['el', { active: calendarOpen }]"
            >Chez un petsitter</span
          >
        </div>
      </button>
    </div>
    <div id="select2">
      <button
        v-on:click="calendarOpen = !calendarOpen"
        :class="[{ active: calendarOpen }, 'dropButton']"
      >
        <div :class="['top', { active: calendarOpen }]">
          <div class="today">
            <span>Aujourd'hui</span
            ><span
              ><b-icon-chevron-down
                :class="['rotate', { active: calendarOpen }]"
              ></b-icon-chevron-down
            ></span>
          </div>
        </div>
        <div :class="['dropdownContent', { active: calendarOpen }]">
          <span :class="['calendar', { active: calendarOpen }]">Cal</span>
        </div>
      </button>
    </div>
    <div id="select3">
      <button
        v-on:click="petOpen = !petOpen"
        :class="[{ active: petOpen }, 'petButton']"
      >
        <div :class="[{ active: petOpen }, 'top']">
          <div :class="[{ active: petOpen }, 'default']">
            <span>Mon chat</span
            ><span
              ><b-icon-chevron-down
                :class="['rotate', { active: petOpen }]"
              ></b-icon-chevron-down
            ></span>
          </div>
        </div>
        <div :class="[{ active: petOpen }, 'optionPet']">
          <div :class="['el', { active: petOpen }]">
            <div>
              <span>Mon chien</span>
            </div>
            <div>
              <span>Mon lapin</span>
            </div>
            <div>
              <span>Mon cochon</span>
            </div>
          </div>
        </div>
      </button>
    </div>
    <div>
      <button class="search">
        <b-icon-search font-scale="2.5"></b-icon-search>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      calendarOpen: false,
      placeOpen: false,
      petOpen: false,
    };
  },
};
</script>
<style scoped>
.panel {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  background: #8c8d9c;
  border-radius: 25px;
  opacity: 1;
  backdrop-filter: blur(32px);
  height: 76px;
}
.search {
  flex-grow: 1;
  background-color: #d80032;
  margin-right: 10px;
  border-radius: 20px;
  height: 62px;
  width: 85px;
  border: none;
  color: white;
}
#select1 {
  flex-grow: 3;
  align-self: flex-start;
  padding-top: 5px;
  padding-left: 10px;
}
.select {
  background-color: #c5c6d1;
  border-radius: 20px;
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  width: 253px;
  height: 62px;
}
#select2 {
  align-self: flex-start;
  padding-top: 5px;
  flex-grow: 8;
}
#select3 {
  align-self: flex-start;
  padding-top: 5px;
  flex-grow: 3;
}

.dropdownContent {
  display: none;
  width: 100%;
}
.optionPlace,
.optionPet {
  display: none;
  width: 100%;
}
.optionPlace.active,
.optionPet.active {
  display: flex;
  flex-direction: row;
  position: relative;
}
.dropdownContent.active {
  display: flex;
  flex-direction: column;
  position: relative;
}
.calendar {
  position: absolute;
}
.el {
  position: absolute;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.placeButton {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: #c5c6d1;
  border-radius: 20px;
  border: none;
  height: 63px;
  color: #fbfeff;
  font-family: poppins-semibold;
  font-size: 20px;
  width: 100%;
  overflow: hidden;
  transition: height 330ms ease-in-out;
  padding-left: 20px;
}
.petButton {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: #c5c6d1;
  border-radius: 20px;
  border: none;
  height: 63px;
  color: #fbfeff;
  font-family: poppins-semibold;
  font-size: 20px;
  width: 100%;
  overflow: hidden;
  transition: height 330ms ease-in-out;
  padding-left: 20px;
}
.petButton.active {
  height: 170px;
  transition: height 330ms ease-in-out;
}
.placeButton.active {
  height: 124px;
  transition: height 330ms ease-in-out;
}
.dropButton {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: #c5c6d1;
  border-radius: 20px;
  border: none;
  height: 63px;
  color: #fbfeff;
  font-family: poppins-semibold;
  font-size: 20px;
  width: 100%;
  padding-left: 20px;
  overflow: hidden;
  transition: height 330ms ease-in-out;
}
.dropButton.active {
  height: 300px;
  transition: height 330ms ease-in-out;
}
.top {
  display: flex;
  margin-top: 15px;
  align-self: flex-start;
  width: 100%;
  border-bottom: solid #c5c6d1 1px;
  transition: border-color 1s;
  padding-bottom: 5px;
}
#select1 .top,
#select3 .top {
  display: flex;
  margin-top: 15px;
  align-self: flex-start;
  width: 100%;
  border-bottom: solid #c5c6d1 1px;
  transition: border-color 1s;
  padding-bottom: 5px;
}
#select1 .top.active,
#select3 .top.active {
  padding-bottom: 5px;
  border-bottom: solid #fbfeff 1px;
}
#select1 .default,
#select3 .default {
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 100%;
}
.top.active {
  border-bottom: solid #fbfeff 1px;
}
.today {
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 100%;
}
.rotate {
  transform: rotate(0);
  transition: transform 330ms ease-in-out;
}
.rotate.active {
  transform: rotate(180deg);
  transition: transform 330ms ease-in-out;
}
</style>
