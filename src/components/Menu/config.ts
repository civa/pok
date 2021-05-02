import { MenuEntry } from 'pok-ui'

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
        href: 'https://swap.pokfans.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.pokfans.com/#/pool',
      },
    ],
  },
  {
    label: 'Farm',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //  label: 'poolss',
  //  icon: 'PoolIcon',
  //  href: '/poolss',
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
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pokFinance',
      },
      {
        label: 'Bscscan',
        href: 'https://bscscan.com/token/0x3b7c8ca664ab6eb8ca8f424851e38b7182b36e5f',
      },
    ],
  },
  //  {
  //    label: 'Audit',
  //    icon: 'AuditIcon',
  //    href: 'https://pokswap.finance/file/pok-swap.pdf',
  //  },
]

export default config
