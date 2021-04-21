import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: '24K-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xde26d2cbf808eb6a174edd50ec8059e09d1d35e9',
    },
    tokenSymbol: '24K',
    tokenAddresses: {
      97: '',
      56: '0xa61385F9805854aDF80D97eFEEffD3e03c7fe1B8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
