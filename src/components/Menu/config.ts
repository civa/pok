import { MenuEntry } from 'dry-uikit'

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
        href: 'http://swap.drycake.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://swap.drycake.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
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
        label: 'DryCake Website',
        href: 'https://DryCake.finance/',
      },
      {
        label: 'HotBit',
        href: 'https://www.hotbit.io/exchange?symbol=DRYCAKE_USDT',
      },
      {
        label: 'BKEX',
        href: 'https://www.hotbit.io/exchange?symbol=DRYCAKE_USDT',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/DryCakeFi',
      },
    ],
  },
  {
    label: 'Partnership',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeXOIhm3NfX064Y1oj251iXcwbAAB6DbMDrvsbo2G2vMnLppQ/viewform',
  },
]

export default config
