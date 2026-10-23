
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.raihanramdhani.alightmotionpremium",
  appName: "Alight Motion Premium",
  webDir: "dist",
  server: {
    url: "https://alight-motion-premium-delta.vercel.app",
    cleartext: false,
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
