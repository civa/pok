import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HAWK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8eC8Db9Ebf1784b28EE081558c0B4a4c7480497B',
    },
    tokenSymbol: 'HAWK',
    tokenAddresses: {
      97: '',
      56: '0xebcfd1376d68d9b2df66561cd519c5afccd65bf0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
//  {
//    pid: 1,
//    risk: 5,
//    lpSymbol: 'BSCTRUST-BUSD POOL',
//    lpAddresses: {
//      97: '',
//      56: '0x3eD392E7c219de06F179B709F09436Fcc7142aFD',
//    },
//    tokenSymbol: 'BSCTRUST',
//    tokenAddresses: {
//      97: '',
//     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
//   },
//   quoteTokenSymbol: QuoteToken.BUSD,
//   quoteTokenAdresses: contracts.busd,
//  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'HAWK-BUSD POOL',
    lpAddresses: {
      97: '',
      56: '0x3eD392E7c219de06F179B709F09436Fcc7142aFD',
    },
    tokenSymbol: 'HAWK',
    tokenAddresses: {
      97: '',
      56: '0xebcfd1376d68d9b2df66561cd519c5afccd65bf0',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
