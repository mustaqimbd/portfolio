const config = {
  api_base_url: process.env.NEXT_PUBLIC_API_BASE_URL,
  gtm_id: process.env.GTM_ID,
  revalidate_secret: process.env.REVALIDATE_SECRET,
  tracking_api_url: process.env.NEXT_PUBLIC_TRACKING_API_URL,
};

export default config;
