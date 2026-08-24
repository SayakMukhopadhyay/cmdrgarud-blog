import type { SiteConfig } from "./types";

export const siteConfig = {
  "directory": "cmdrgarud-blog",
  "title": "CMDR Garud",
  "description": "Into the Black",
  "locale": "en",
  "timezone": "Asia/Kolkata",
  "accentColor": "#ff8000",
  "logo": "/content/images/2021/10/Profile-Logo.png",
  "icon": "/content/images/2021/10/Profile-Logo-1.png",
  "coverImage": "/content/images/2019/07/359320_20160916101539_1.png",
  "deploymentOrigin": null,
  "routePolicy": "legacy-root",
  "author": {
    "name": "CMDR Garud",
    "slug": "garud",
    "bio": "Explorer, trader and occasional bounty hunter. Loves his Asp Explorer, Antrix. Always on the lookout for new mysteries.",
    "location": "Carpini Terminal, Qa'wakana",
    "profileImage": "/content/images/2021/06/CMDR-Garud-2.png",
    "coverImage": "/content/images/2019/07/359320_20190516155551_1.png",
    "website": "https://sayakm.me",
    "twitter": "@cmdrgarud"
  },
  "navigation": [
    {
      "label": "Home",
      "href": "/"
    },
    {
      "label": "Nebula Visit Log",
      "pageSlug": "nebula-visit-log"
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
  "additionalFiles": [],
  "forceDraftPages": []
} as const satisfies SiteConfig;
