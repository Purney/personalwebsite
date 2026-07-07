import config from "@/config";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function manifest() {
  return {
    name: config.appName,
    short_name: "William Purnell",
    description: config.appDescription,
    start_url: siteUrl,
    scope: siteUrl,
    display: "standalone",
    background_color: "#020617",
    theme_color: "#06b6d4",
    icons: [
      {
        src: absoluteUrl("/android-chrome-192x192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: absoluteUrl("/android-chrome-512x512.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
