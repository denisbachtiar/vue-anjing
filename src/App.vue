<template>
  <div>
    <h1>Bermacam-macam Anjing</h1>
    <div>
      <div class="custom-select" @click="state.show = !state.show">
        {{ state.dog ? state.dog : "Pilih anjing" }}
        <span style="margin-left: auto;"
          ><img
            src="https://image.flaticon.com/icons/png/512/25/25629.png"
            alt=""
            width="10"
            :class="state.show ? 'arrow up' : 'arrow down'"
        /></span>
        <div v-if="state.show" class="select-items-box">
          <div
            class="select-items"
            v-for="(items, i) in state.dogs"
            :key="i"
            @click="state.dog = items"
          >
            <span style="margin-left: 5px">{{ items }}</span>
          </div>
        </div>
      </div>
    </div>
    <img
      :src="state.dog_image"
      v-if="!state.loading_image"
      style="margin-top: 30px"
      width="300"
      alt=""
    />
    <h4 v-else>Getting dog image...</h4>
  </div>
</template>

<script>
import DogsDataFunc from "./components/DogsDataFunc";
export default {
  name: "App",
  components: {},
  setup() {
    const SetupData = DogsDataFunc();
    return { ...SetupData };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.select-control {
  width: 15%;
  height: 30px;
}
.custom-select {
  cursor: pointer;
  width: 200px;
  height: 20px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 5px;
  text-align: left;
  padding-left: 5px;
  display: flex;
  position: relative;
}
.select-items-box {
  position: absolute;
  z-index: 9999;
  left: 5px;
  width: 90%;
  top: 30px;
  padding: 5px;
  background-color: white;
  height: 200px;
  overflow: auto;
  box-shadow: 0px 4px 5px 0px rgb(47 47 47 / 48%);
}
.select-items {
  width: 100%;
  height: 20px;
  border: solid 1px red;
  background: white;
  color: black;
  margin-bottom: 5px;
}
.arrow {
  transition: all 0.3s;
}
.arrow.up {
  transform: rotate(180deg);
}
.arrow.down {
  transform: rotate(0deg);
}
</style>
