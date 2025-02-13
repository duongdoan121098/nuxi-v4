import { config } from "dotenv-flow";

config();

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: ".",
  dir: {
    app: "app",
  },
  future: {
    compatibilityVersion: 4,
  },
  features: {
    inlineStyles: true,
  },
  experimental: {
    renderJsonPayloads: true,
    crossOriginPrefetch: true,
    sharedPrerenderData: true,
    cookieStore: true,
    asyncContext: true,
    resetAsyncDataToUndefined: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_URL?.trim(),
      apiPath: process.env.NUXT_API_PATH?.trim(),
      baseURl: process.env.NUXT_BASE_URL?.trim(),
    },
    imgLink: process.env.NUXT_IMG_URL?.trim(),
  },
});
