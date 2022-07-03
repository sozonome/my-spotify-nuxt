<template>
  <p v-if="!data || (!!data && !data?.isPlaying)" class="text-center text-gray-500">Not Listening</p>

  <a v-if="!!data && data.isPlaying" :href="data.trackUrl" class="flex rounded-xl mx-auto items-center gap-2 h-20" target="_blank">
    <img :src="data.albumArtUrl" class="w-16 rounded-md" />
    <div>
      <p class="font-heading font-extrabold text-size-sm">
        {{ data.trackTitle }}
      </p>
      <p class="font-sans text-size-xs text-gray-500">{{ data.artist }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { GetNowPlayingTransformed } from "~~/composables/services/spotify/user/now-playing/types";

interface SpotifyNowListeningProps {
  data: GetNowPlayingTransformed;
}

const props = defineProps<SpotifyNowListeningProps>();
const data = props.data;
</script>
