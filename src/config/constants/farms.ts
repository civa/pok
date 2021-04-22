import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: '24K-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x56ab62066530d25d806966bb30c6ccf53aa84991',
    },
    tokenSymbol: '24K',
    tokenAddresses: {
      97: '',
      56: '0xc2cf88f48f86Dc9CC2A589DF19038b35283Cb637',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
