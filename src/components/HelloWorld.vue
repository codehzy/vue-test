<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const { data } = await axios({
  method: "get",
  url: "https://dog.ceo/api/breeds/image/random",
  timeout: 5000,
});

const { message } = data;

console.log(message);

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <img :src="message" alt="" style="width: 200px; height: 150px" />
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
