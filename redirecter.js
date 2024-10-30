// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 19 August 2024 03:38:25 PM (UTC+3)

// yes i know this is not the best way to create redirects, but what's
// the point in complicating when there is enough of this?=)

// huh, yeah, i know about apache and php but is not need for me
// and... whatever my site is completely static lol

// please don't cyberbully me, I'm just a stupid cute boy >.<

const platform = window.location.search.split("?r=")[1] || window.location.hash.split("#")[1];
const urls = {
  "kladmen-rabota": "youtu.be/dQw4w9WgXcQ",
  "rick": "youtu.be/dQw4w9WgXcQ",
  gDPI: "track24.ru/google/?q=site%3Agithub.com%20GoodbyeDPI",
  idiot: "cdn1.picturebb.com/1/2024/09/02/8daJw.jpg",
  screenshot: "nubovik01.github.io/prntsc-screamer",
  "ds-serv": "discord.gg/EJc8UC7yhZ",
  ds: "discord.gg/EJc8UC7yhZ",
  dsuz: "discord.com/users/454314234830913557",
  vk: "vk.com/qwkrtezzz",
  blog: "t.me/nbvkxd",
  bio: "t.me/nbvkbio",
  tgch: "t.me/+zKh2bytYFakxZGQ6",
  mt: "monkeytype.com/profile/qwkrtezzz",
  spotify: "open.spotify.com/user/tx9f1ojp5ghsdkbsrn085sn2k",
  spoti: "open.spotify.com/user/tx9f1ojp5ghsdkbsrn085sn2k",
  inst: "instagram.com/nubovik01",
  tt: "tiktok.com/@MS4wLjABAAAA_5B8WvP070s2dUiO0b44jeTljgEh8xSsiDPz8o2PazArEbbkUzZCUEmSdBlR9dwG",
  tg: "t.me/qwkrzbot",
  "tg-flame": "t.me/flameoutupdates",
  faq: "t.me/qwkrzfaq",
  gh: "github.com/nubovik01",
  "gh-site-repo": "github.com/nubovik01/nubovik01.github.io",
  "gh-flamebot-repo": "github.com/nubovik01/flamebot",
  "gh-redirecter-repo": "github.com/nubov1k/redirecter",
  "gh-luchikbot-repo": "github.com/nubovik01/luchikbot",
  "gh-pcb-repo": "github.com/nubovik01/phone-converter-bot",
  circus: "t.me/nbvkcircus",
  pint: "ru.pinterest.com/qwkrtezzz",
  twx: "x.com/impostornubovik",
  redit: "reddit.com/user/nubovik01",
  dnt: "telegra.ph/tip-me-plz-10-29",
  stim: "steamcommunity.com/id/nubovik01",
  ymuz: "music.yandex.ru/users/Nubovikgg/",
  flame: "nubovik.gitbook.io/flameout",
  "flameout-rip": "t.me/flameoutupdates/845",
  status: "stats.uptimerobot.com/auqO4VrKOf",
  uptime: "stats.uptimerobot.com/auqO4VrKOf",
  tempa: "nubovik01.github.io/temperature"
};

if (platform && urls[platform]) window.location.href = "https://" + urls[platform];

if (!urls[platform]) console.log("[*] There doesn't seem to be such a redirect...");

if (!urls[platform] && window.location.host === "r.kittyy.ru") {
  window.location.href = "https://nbvk.kittyy.ru";
};
