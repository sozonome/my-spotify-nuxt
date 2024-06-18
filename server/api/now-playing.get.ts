import {
  getSpotifyNowPlaying,
  transformNowPlayingResponse,
} from "~~/composables/services/spotify/user/now-playing";
import type { GetNowPlayingTransformed } from "~~/composables/services/spotify/user/now-playing/types";

export default defineEventHandler(async (_) => {
  try {
    const response = await getSpotifyNowPlaying();

    if (!response || !response.item) {
      return { isPlaying: false };
    }

    const data: GetNowPlayingTransformed =
      transformNowPlayingResponse(response);

    return data;
  } catch {
    return { isPlaying: false };
  }
});
