<template>
  <div class="grid">
    <SpotifyNowListening :data="nowPlayingData" />
  </div>
</template>

<script setup>
const nowPlayingData = await useFetch('/api/now-playing');
</script>