import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: '24K-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc5bf6be173174e0beb384ba273be2b73085b5a5b',
    },
    tokenSymbol: '24K',
    tokenAddresses: {
      97: '',
      56: '0x6F3Cf80e90866Ee17Af465A710F18b612EB655f0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
