import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'POK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1847603673f463a5b91105dceddb31f73e557457',
    },
    tokenSymbol: 'POK',
    tokenAddresses: {
      97: '',
      56: '0xcf951d41c096aa3750ee1943c9b62e3b0977fd35',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


]

export default farms
