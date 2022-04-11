<script setup lang="ts">
import { toRefs } from "vue-demi";
import { RouterLink, RouterView } from "vue-router";
import Routes from "./router/Routes.vue";
import { useCounterStore } from "./stores/counter";
const counterStore = useCounterStore();

const {counter, doubleCount, increment} = toRefs( counterStore );
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Hello world</h1>
      <p>{{counter}}</p>
      <p>{{doubleCount}}</p>
      <button @click="increment">increse</button>

      <Routes />
    </div>
  </header>

  <RouterView />
</template>

<style></style>
