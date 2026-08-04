import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://bilingual-blog.pages.dev/",
    title: "你的博客标题",
    description: "双语博客",
    author: "你的名字",
    profile: "https://github.com/recipe9999-code",
    ogImage: "astropaper-og.jpg",
    // Default locale of the bilingual site (Chinese at root, English at /en/).
    // Used as the html lang fallback when Astro.currentLocale is undefined.
    lang: "zh",
    timezone: "Asia/Singapore",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    // Dynamic per-post OG images (satori + sharp). Works in the pure-static
    // Node build. Latin titles render fully; CJK titles fall back to the
    // satori font set (see og.png.ts) — same behaviour as before the rebase.
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/recipe9999-code/AstroPages-Bilingual-CP/edit/main/",
    },
    search: "pagefind",
    gallery: {
      enabled: true,
      imageDomains: ["upload.wikimedia.org"],
    },
  },
  socials: [
    { name: "github", url: "https://github.com/recipe9999-code" },
  ],
  shareLinks: [
    {
      name: "weibo",
      url: "https://service.weibo.com/share/share.php?url=",
      iconStyle: "solid",
    },
    {
      name: "qq",
      url: "https://connect.qq.com/widget/shareqq/index.html?url=",
      iconStyle: "solid",
    },
    {
      name: "qzone",
      url: "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=",
      iconStyle: "solid",
    },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
