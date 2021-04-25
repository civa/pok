import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'POK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x769f78cf639501f4e8677d74141969bbc161b51e',
    },
    tokenSymbol: 'POK',
    tokenAddresses: {
      97: '',
      56: '0x3b7c8ca664ab6eb8ca8f424851e38b7182b36e5f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
