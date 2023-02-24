module.exports = {
    evmNodeLink: 'https://mainnet.infura.io/v3/fc5d23096e754d64a5f261f5f07170d5',
    evmWSNodeLink: 'wss://mainnet.infura.io/ws/v3/fc5d23096e754d64a5f261f5f07170d5',
    bscNodeLink: 'https://bsc-dataseed1.binance.org/',
    dex: {
      UNISWAP: {
        contractID: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        chainName: 'Ethereum',
        dexId: '1000',
        method: {
          '0xb6f9de95': ['uint256', 'address[]', 'address', 'uint256'],
          '0x18cbafe5': ['uint256','uint256', 'address[]', 'address', 'uint256'],
          '0x7ff36ab5': ['uint256', 'address[]', 'address', 'uint256'],
          '0xfb3bdb41': ['uint256', 'address[]', 'address', 'uint256'],
          '0x38ed1739': ['uint256','uint256','address[]', 'address', 'uint256'],
          '0x791ac947': ['uint256', 'uint256', 'address[]', 'address', 'uint256'],
          '0x5c11d795': ['uint256', 'uint256', 'address[]', 'address', 'uint256'],
          '0x8803dbee': ['uint256', 'uint256', 'address[]', 'address', 'uint256'],
          '0x4a25d94a': ['uint256', 'uint256', 'address[]', 'address', 'uint256']
        },
      },
      PANCAKESWAP: {
        contractID: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
        chainName: 'BSC',
        dexId: '1200',
        method: {
          '0xb6f9de95': ['uint256', 'address[]', 'address', 'uint256'],
          '0x18cbafe5': ['uint256','uint256', 'address[]', 'address', 'uint256'],
          '0x7ff36ab5': ['uint256', 'address[]', 'address', 'uint256'],
          '0xfb3bdb41': ['uint256', 'address[]', 'address', 'uint256'],
          '0x38ed1739': ['uint256','uint256','address[]', 'address', 'uint256'],
          '0x791ac947': ['uint256', 'uint256', 'address[]', 'address', 'uint256'],
          '0x5c11d795': ['uint256', 'uint256', 'address[]', 'address', 'uint256'],
          '0x8803dbee': ['uint256', 'uint256', 'address[]', 'address', 'uint256'],
          '0x4a25d94a': ['uint256', 'uint256', 'address[]', 'address', 'uint256']
        },
      },
      SUSHISWAP: {
        contractID: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
        chainName: 'Ethereum',
        dexId: '1100',
        method: {
          '0xb6f9de95': ['uint256', 'address[]', 'address', 'uint256'],
          '0x18cbafe5': ['uint256','uint256', 'address[]', 'address', 'uint256'],
          '0x7ff36ab5': ['uint256', 'address[]', 'address', 'uint256'],
          '0xfb3bdb41': ['uint256', 'address[]', 'address', 'uint256'],
          '0x38ed1739': ['uint256','uint256','address[]', 'address', 'uint256'],
          '0x791ac947': ['uint256', 'uint256', 'address[]', 'address', 'uint256'],
          '0x5c11d795': ['uint256', 'uint256', 'address[]', 'address', 'uint256'],
          '0x8803dbee': ['uint256', 'uint256', 'address[]', 'address', 'uint256'],
          '0x4a25d94a': ['uint256', 'uint256', 'address[]', 'address', 'uint256']
        },
      },
      UNISWAPV3: {
        contractID: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
        chainName: 'Ethereum',
        dexId: '1300',
        method: {
          '0x5ae401dc': ['uint256','bytes[]'],
          '0x472b43f3': ['uint256', 'uint256', 'address[]', 'address']
        },
      },
    },
  };