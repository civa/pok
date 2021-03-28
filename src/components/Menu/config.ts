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
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: '',
      },
      {
        label: 'CoinMarketCap',
        href: '',
      },
      {
        label: 'AstroTools',
        href: '',
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
      {
        label: 'Docs',
        href: '',
      },
      {
        label: 'Blog',
        href: '',
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
