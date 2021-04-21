import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: '24K-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x64e05d2b1d037e889ef53ea5dcb7cf85a7cb0693',
    },
    tokenSymbol: '24K',
    tokenAddresses: {
      97: '',
      56: '0x8f98867940fE0eb9d12De6AAE048402E6d14ED40',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
