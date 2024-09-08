// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 19 August 2024 03:38:25 PM (UTC+3)

const platform = window.location.search.split("?r=")[1] || window.location.hash.split("#")[1];
const urls = {
  "kladmen-rabota": "youtu.be/dQw4w9WgXcQ",
  idiot: "cdn1.picturebb.com/1/2024/09/02/8daJw.jpg",
  screenshot: "nubovik01.github.io/prntsc-screamer",
  "ds-serv": "discord.gg/EJc8UC7yhZ",
  ds: "discord.gg/EJc8UC7yhZ",
  vk: "vk.com/qwkrtezzz",
  blog: "t.me/nbvkxd",
  bio: "t.me/nbvkbio",
  mt: "monkeytype.com/profile/qwkrtezzz",
  spotify: "open.spotify.com/user/tx9f1ojp5ghsdkbsrn085sn2k",
  spoti: "open.spotify.com/user/tx9f1ojp5ghsdkbsrn085sn2k",
  tt: "tiktok.com/@nubovik",
  tg: "t.me/qwkrzbot",
  "tg-flame": "t.me/flameoutupdates",
  faq: "t.me/qwkrzfaq",
  gh: "github.com/nubovik01",
  "gh-site-repo": "github.com/nubovik01/nubovik01.github.io",
  "gh-flamebot-repo": "github.com/nubovik01/flamebot",
  "gh-redirecter-repo": "github.com/nubov1k/redirecter",
  circus: "t.me/nbvkcircus",
  pint: "ru.pinterest.com/qwkrtezzz",
  twx: "x.com/impostornubovik",
  redit: "reddit.com/user/nubovik01",
  dnt: "telegra.ph/tip-me-05-10",
  stim: "steamcommunity.com/id/nubovik01",
  ymuz: "music.yandex.ru/users/Nubovikgg/",
  flame: "nubovik.gitbook.io/flameout",
  "flameout-rip": "t.me/flameoutupdates/845",
  status: "stats.uptimerobot.com/auqO4VrKOf",
  uptime: "stats.uptimerobot.com/auqO4VrKOf",
  tempa: "nbvk.kittyy.ru/temperature"
};

if (platform && urls[platform]) window.location.href = "https://" + urls[platform];

if (!urls[platform]) console.log("[*] There doesn't seem to be such a redirect...");

if (!urls[platform] && window.location.host === "r.kittyy.ru") {
  window.location.href = "https://nbvk.kittyy.ru";
};
