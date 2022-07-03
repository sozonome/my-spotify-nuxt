<template>
  <div class="grid">
    <SpotifyNowListening :data="nowPlayingData" />
  </div>
</template>

<script setup>
const nowPlayingData = await $fetch('/api/now-playing');
</script>