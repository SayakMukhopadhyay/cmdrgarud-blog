import type { ImageMetadata } from 'astro';

export interface ImageCredit {
  kind: 'photo' | 'screenshot' | 'artwork';
  creator: string;
  creatorUrl?: string;
  provider?: string;
  providerUrl?: string;
  sourcePageUrl?: string;
  originalAssetUrl?: string;
  licenseUrl?: string;
}

export interface SiteImage { image: ImageMetadata; alt: string; credit?: ImageCredit; }
export interface NavigationItem { label: string; href: string; }
export interface SiteConfig {
  title: string; description: string; locale: string; timezone: string; accentColor: string;
  logo: ImageMetadata; cover: SiteImage;
  author: { name: string; slug: string; bio: string | null; location: string | null; profileImage: ImageMetadata; profileAlt: string; profileCredit?: ImageCredit; website: string | null; };
  navigation: readonly NavigationItem[]; tagLabels: Readonly<Record<string, string>>;
}
