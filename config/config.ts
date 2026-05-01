const config = {
  api_base_url: process.env.NEXT_PUBLIC_API_BASE_URL,
  gtm_id: process.env.GTM_ID,
  facebookPixelId: process.env.FACEBOOK_PIXEL_ID?.split(",") || [],
  facebookAccessToken: process.env.FACEBOOK_ACCESS_TOKEN?.split(",") || [],
  facebookTestEventCode: process.env.FACEBOOK_TEST_EVENT_CODE,
  revalidate_secret: process.env.REVALIDATE_SECRET,
  tracking_api_url: process.env.NEXT_PUBLIC_TRACKING_API_URL,
};

export default config;
