"use server";

import config from "@/config/config";
import { META_EVENT_MAP } from "../event.types";
import { MetaCAPIEventPayload } from "./capi.types";

export async function sendMetaCAPIEvent(payload: MetaCAPIEventPayload) {
  try {
    const pixelIds = config.facebookPixelId;
    const tokens = config.facebookAccessToken;

    if (pixelIds.length === 0 || tokens.length === 0) {
      // eslint-disable-next-line no-console
      console.warn("Meta CAPI: Missing Pixel ID or Access Token in environment variables.");
      return { success: false, message: "Missing configuration" };
    }

    // Prepare the payload for CAPI (using mapped event name)
    const capiPayload = {
      ...payload,
      event_name: META_EVENT_MAP[payload.event_name] || payload.event_name,
    };

    const reqBody = {
      data: [capiPayload],
      ...(config.facebookTestEventCode && {
        test_event_code: config.facebookTestEventCode,
      }),
    };

    const results = await Promise.all(
      pixelIds.map(async (pixelId, index) => {
        const token = tokens[index]?.trim();
        const pId = pixelId.trim();
        if (!pId || !token) return { pixelId: pId, success: false, error: "Missing token" };

        const fbCApiBaseUrl = `https://graph.facebook.com/v25.0/${pId}/events?access_token=${token}`;

        try {
          const response = await fetch(fbCApiBaseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqBody),
          });
          const result = await response.json();
          return { pixelId: pId, success: response.ok, result };
        } catch (err) {
          return { pixelId: pId, success: false, error: err };
        }
      })
    );

    return { success: true, results };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Meta CAPI General Error:", error);
    return { success: false, error };
  }
}
