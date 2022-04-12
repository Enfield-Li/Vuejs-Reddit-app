<template>
  <div
    class="card d-flex flex-row justify-content-center my-2 container"
    aria-hidden="true"
  >
    <div class="mt-2 ms-3">
      <i class="bi bi-caret-up btn" />
      <div class="text-center"></div>
      <i class="bi bi-caret-down btn" />
    </div>
    <div class="card-body">
      <div class="card-text placeholder-glow" style="height: 30">
        <span class="placeholder col-5 rounded"></span>
      </div>
      <h5 class="card-title placeholder-glow">
        <span class="placeholder col-7 rounded" style="height: 35"></span>
      </h5>
      <p class="card-text placeholder-glow">
        <span class="placeholder col-12 w-100" style="height: 300"></span>
        <span class="placeholder col-2 me-2 rounded"></span>
        <span class="placeholder col-1 rounded"></span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
