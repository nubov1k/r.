// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 19 August 2024 03:38:25 PM (UTC+3)

// yes i know this is not the best way to create redirects, but what's
// the point in complicating when there is enough of this?=)

// huh, yeah, i know about apache and php but is not need for me
// and... whatever my site is completely static lol

// please don't cyberbully me, i'm just a silly cute boy >.<

const unavailablePage = "kittyy.ru/unavailable.html";

const platform = window.location.search.split("?r=")[1] || window.location.hash.split("#")[1];
const urls = {
  "kladmen-rabota": "youtu.be/dQw4w9WgXcQ",
  "rick": "youtu.be/dQw4w9WgXcQ",
  screenshot: "nubovik01.github.io/prntsc-screamer",
  ds: "discord.com/users/454314234830913557",
  "ds-serv": "discord.gg/EJc8UC7yhZ",
  vk: "vk.com/qwkrtezzz",
  blog: "t.me/nbvkxd",
  bio: "t.me/nbvkbio",
  tgch: "t.me/+zKh2bytYFakxZGQ6",
  mt: "monkeytype.com/profile/qwkrtezzz",
  spoti: "open.spotify.com/user/tx9f1ojp5ghsdkbsrn085sn2k",
  inst: "instagram.com/nubovik01",
  tt: "tiktok.com/@MS4wLjABAAAA_5B8WvP070s2dUiO0b44jeTljgEh8xSsiDPz8o2PazArEbbkUzZCUEmSdBlR9dwG",
  tg: "t.me/qwkrzbot",
  "tg-flame": "t.me/flameoutupdates",
  faq: "t.me/qwkrzfaq",
  gh: "github.com/nubovik01",
  "gh-site-repo": "github.com/nubovik01/nubovik01.github.io",
  "gh-python-calculator": "github.com/nubovik01/python-simple-calculator",
  pcb: "github.com/nubovik01/phone-converter-bot",
  kakkoii: "github.com/nubovik01/kakkoii-spybot",
  bulky: "github.com/nubovik01/bulky-userbot",
  "school-calc": "github.com/nubovik01/python-simple-calculator",
  circus: "t.me/nbvkcircus",
  pint: "ru.pinterest.com/qwkrtezzz",
  twx: "x.com/impostornubovik",
  redit: "reddit.com/user/nubovik01",
  dnt: "telegra.ph/tip-me-plz-10-29",
  ton: "tonviewer.com/EQAgs7JZNVxNlhCMsv_J__4cqcuYJS3Os--yoJydk-TCwyYV",
  stim: "steamcommunity.com/id/nubovik01",
  ymuz: "music.yandex.ru/users/Nubovikgg/",
  flame: "nubovik.gitbook.io/flameout",
  "flameout-rip": "t.me/flameoutupdates/845",
  status: "stats.uptimerobot.com/auqO4VrKOf",
  "prntsc-screamer": "nubov1k.github.io/prntsc-screamer",
  "wktm": "https://wakatime.com/@nubovik"
};

if (platform && urls[platform]) window.location.href = "https://" + urls[platform];

if (!urls[platform]) console.log("[*] There doesn't seem to be such a redirect...");

if (!urls[platform] && window.location.host === "r.kittyy.ru") {
  window.location.href = "https://nubovik01.github.io";
};
