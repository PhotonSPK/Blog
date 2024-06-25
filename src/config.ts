import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Akula::Blog',
  subtitle: '摸鱼小站 ',
  lang: 'zh_CN', // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 219, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true, // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/avatar.webp', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
  },
  favicon: [
    // Leave this array empty to use the default favicon
    {
      src: '/favicon.ico', // Path of the favicon, relative to the /public directory
    },
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [LinkPreset.Home, LinkPreset.Archive, LinkPreset.About],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.webp', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'AkulaKirov',
  bio: 'per aspera ad astra.',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/PhotonSPK/',
    },
    {
      name: 'Mail',
      icon: 'fa6-regular:envelope',
      url: 'mailto:libakula@outlook.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/id/AkulaKirov/',
    },
    {
      name: 'Bilibili',
      icon: 'fa6-brands:bilibili',
      url: 'https://space.bilibili.com/4383559/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
