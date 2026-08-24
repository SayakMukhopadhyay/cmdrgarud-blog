import type { SiteConfig } from './config/types';
import logoImage from './assets/site/logo.png';
import coverImage from './assets/site/cover.png';
import authorImage from './assets/site/author.png';

export const siteConfig: SiteConfig = {
  title: "CMDR Garud",
  description: "Into the Black",
  locale: "en",
  timezone: "Asia/Kolkata",
  accentColor: "#ff8000",
  logo: logoImage,
  cover: {
    image: coverImage,
    alt: "A spacecraft flying through deep space."
  },
  author: {
    name: "CMDR Garud",
    slug: "garud",
    bio: "Explorer, trader and occasional bounty hunter. Loves his Asp Explorer, Antrix. Always on the lookout for new mysteries.",
    location: "Carpini Terminal, Qa'wakana",
    profileImage: authorImage,
    profileAlt: "CMDR Garud",
    website: "https://sayakm.me"
  },
  navigation: [
  {
    "label": "Home",
    "href": "/"
  },
  {
    "label": "Nebula Visit Log",
    "href": "/nebula-visit-log/"
  },
  {
    "label": "Elite BGS",
    "href": "https://elitebgs.app"
  },
  {
    "label": "INARA",
    "href": "https://inara.cz/cmdr/31376/"
  }
],
  tagLabels: {
  "alpha-centauri": "Alpha Centauri",
  "azimuth-saga": "Azimuth Saga",
  "chi-herculis": "Chi Herculis",
  "dangerous-games": "Dangerous Games",
  "diaguandri": "Diaguandri",
  "hutton-run": "Hutton Run",
  "knights-of-karma": "Knights of Karma",
  "kokie": "KoKIE",
  "lhs-3447": "LHS 3447",
  "nebula": "Nebula",
  "project-dynasty": "Project Dynasty",
  "qawakana": "Qa'wakana",
  "solitude": "Solitude",
  "the-first-great-planetary-expedition": "The First Great Planetary Expedition",
  "traikaae-aa-a-h2-nebula": "TRAIKAAE AA-A H2 Nebula",
  "vision": "Vision",
  "witch-head-nebula": "Witch Head Nebula"
}
};
