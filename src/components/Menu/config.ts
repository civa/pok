import { MenuEntry } from 'hawk-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '#',
      },
      {
        label: 'Liquidity',
        href: '#',
      },
    ],
  },
  {
    label: 'Hunt',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //  label: 'Nests',
  //  icon: 'PoolIcon',
  //  href: '/nests',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BSCTrust Website',
        href: 'https://bsctrust.finance/',
      },
      {
        label: 'Livecoinwatch',
        href: 'https://www.livecoinwatch.com/price/BSCTrustfinance-BSCTRUST',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/hawkswap',
      },
    ],
  },
  {
    label: 'Partnership',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSehFmuW7I4zxrXQYFHU7tfpQoe2CXTEiMZoddTIOYdVs71LBg/viewform?usp=sf_link',
  },
]

export default config
