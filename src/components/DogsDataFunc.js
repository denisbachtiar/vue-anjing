import { reactive, watch } from "vue";
export default function DogsDataFunc() {
  const state = reactive({
    dogs: {},
    dog: "",
    dog_image: "",
    loading_image: false,
    show: false,
  });

  fetch("https://dog.ceo/api/breeds/list/all", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((aJson) => {
      const arr = [];
      state.dogs = Object.keys(aJson.message);
      state.dogs.forEach((dog) => {
        if (aJson.message[dog].length > 0) {
          aJson.message[dog].forEach((dogChild) => {
            arr.push(`${dog}/${dogChild}`);
          });
        }
      });

      state.dogs = state.dogs.concat(arr).sort();
    });

  const getImage = (dog_name) => {
    state.loading_image = true;
    fetch(`https://dog.ceo/api/breed/${dog_name}/images/random`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((aJson) => {
        state.dog_image = aJson.message;
        state.loading_image = false;
      });
  };

  watch(
    () => state.dog,
    (val) => {
      getImage(val);
    }
  );
  return { state };
}
