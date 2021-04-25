import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'POK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x769f78cF639501F4E8677D74141969BBc161B51E',
    },
    tokenSymbol: 'POK',
    tokenAddresses: {
      97: '',
      56: '0x3b7c8cA664AB6Eb8cA8F424851E38B7182b36e5f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
