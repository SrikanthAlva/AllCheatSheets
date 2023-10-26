## USDT

There are 2 caveats with USDT.

1. The token requires an allowance to be reset before setting a new one. So you can't just change it from 10 to 5. You have to do 10 -> 0 -> 5 = 2 transactions. Literally a degraded UX and a possibility of DOS.

2. USDT doesn't return "bool" in functions approve(), transfer(), and transferFrom() which makes it incompatible with ERC20 interfaces. Solidity reverts if the expected non-empty returndata happens to be empty. That is why you are forced to use low-level calls and safeTransfer libraries that basically skip the check.

## WETH

2 caveats for WETH as well.

1. WETH withdraw() function that unwraps ether calls transfer() that forwards only 2300 gas to the receiver. The catch is the 2300 gas might not be enough for a proxy contract (especially Diamond) to process the withdrawal, which might result in DOS.

2. WETH has a payable fallback function that is designed to handle deposits. However, fallbacks are cunning, they can become fantom functions on a whim. This can become an issue if you mistakenly call an inexistent permit on WETH and the call won't fail due to fallback. Allowance griefing again I guess?