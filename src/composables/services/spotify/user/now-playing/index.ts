import { getAccessToken } from "@/composables/services/spotify/auth/getAccessToken";

import type { GetNowPlayingResponse, GetNowPlayingTransformed } from "./types";

const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getSpotifyNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();

  return $fetch<GetNowPlayingResponse>(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const transformNowPlayingResponse = (
  response: GetNowPlayingResponse
) => {
  const data: GetNowPlayingTransformed = {
    isPlaying: response.is_playing,
    trackTitle: response.item.name,
    artist: response.item.album.artists.map(({ name }) => name).join(", "),
    album: response.item.album.name,
    albumArtUrl: response.item.album.images[0].url,
    trackUrl: response.item.external_urls.spotify,
  };

  return data;
};
