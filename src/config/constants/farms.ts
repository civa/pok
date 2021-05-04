import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
    {
    pid: 3,
    risk: 5,
    lpSymbol: 'POK POOL',
    lpAddresses: {
      97: '',
      56: '0x3b7c8ca664ab6eb8ca8f424851e38b7182b36e5f',
    },
    tokenSymbol: 'POK',
    tokenAddresses: {
      97: '',
      56: '0x3b7c8ca664ab6eb8ca8f424851e38b7182b36e5f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
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
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'V2 - POK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x99f66f309af4523a00230abfcca9895d1ae75917',
    },
    tokenSymbol: 'POK',
    tokenAddresses: {
      97: '',
      56: '0x3b7c8cA664AB6Eb8cA8F424851E38B7182b36e5f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'v2 - BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

]

export default farms
