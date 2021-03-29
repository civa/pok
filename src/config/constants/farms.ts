import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HAWK-BNB LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'HAWK',
    tokenAddresses: {
      97: '',
    56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'BSCTRUST-BUSD POOL',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'BSCTRUST',
    tokenAddresses: {
      97: '',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'HAWK-BUSD POOL',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'HAWK',
    tokenAddresses: {
      97: '',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
