export type RoutePolicy = 'legacy-root';

export type NavigationItem =
  | { label: string; href: string; pageSlug?: never }
  | { label: string; pageSlug: string; href?: never };

export interface SiteConfig {
  directory: string;
  title: string;
  description: string;
  locale: string;
  timezone: string;
  accentColor: string;
  logo: string;
  icon: string;
  coverImage: string;
  deploymentOrigin: string | null;
  routePolicy: RoutePolicy;
  author: {
    name: string;
    slug: string;
    bio: string | null;
    location: string | null;
    profileImage: string;
    coverImage: string | null;
    website: string | null;
    twitter: string | null;
  };
  navigation: NavigationItem[];
  additionalFiles: string[];
  forceDraftPages: string[];
}
