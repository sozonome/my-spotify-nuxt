<template>
  <div class="grid">
    <SpotifyNowListening :data="nowPlayingData" />
  </div>
</template>

<script setup>
const { data: nowPlayingData } = await useFetch("/api/now-playing");
</script>
