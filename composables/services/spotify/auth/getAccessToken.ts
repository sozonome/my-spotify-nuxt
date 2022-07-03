import { Buffer } from "buffer";
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "~~/composables/services/spotify/constants";

import type { GetAccessTokenResponse } from "./types";

const SPOTIFY_TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const basic = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString("base64");

const basicHeaders = {
  Authorization: `Basic ${basic}`,
  "Content-Type": "application/x-www-form-urlencoded",
};

export const getAccessToken = () =>
  $fetch<GetAccessTokenResponse>(SPOTIFY_TOKEN_ENDPOINT, {
    method: "POST",
    headers: basicHeaders,
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });
