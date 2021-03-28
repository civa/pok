import { MenuEntry } from '@pancakeswap-libs/uikit'

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
        href: 'https://swap.hawkswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.hawkswap.finance/#/pool',
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
    href: '',
  },
]

export default config
