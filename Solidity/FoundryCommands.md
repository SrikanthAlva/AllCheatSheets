# Foundry Commands

## Foundry installation

```
curl -L https://foundry.paradigm.xyz | bash

# close the terminal and open new one

foundryup

```

### Verify Installtion

```
forge --version
cast --version
anvil --version
chisel --version
```

## Anvil

```
# starts local blockchain persistant
anvil
```

## Forge

```
forge init - to create a foundry project
forge compile - compile contracts
forge --help - To know about all existing forge commands
forge fmt - formats code
```

```
forge install smartcontractkit/chainlink-brownie-contracts --no-commit
forge install Cyfrin/foundry-devops --no-commit
```

### Create

```
forge create --help
forge create - Deploy a smart contract [aliases: c]
---
forge create SimpleStorage --interactive [provides option to enter private key] [deploys to non persistant blockchain by default]
forge create SimpleStorage --private-key 0x32432432432432432432 [deploys to anvil local blockchain by default]
forge create SimpleStorage --rpc-url http://127.0.0.1:8545 --private-key 0x32432432432432432432 [deploys to the network specified]
```

### Test

```
forge test - compiles and runs tests
forge test -vv - prints console.log values in tests
forge test -vvv - more v, gives a level deeper stack trace
forge test --mt TEST_FUNCTION_NAME - test a specific function in the test suit
forge test -imt TEST_FUNCTION_NAME --fork-url $RPC_URL -vvv - to test on the forked anvil chain

```

#### Notes

-   Solidity is used as both programming language and scripting language.
-   Foundry Provides all the additional features to support scripting in Solidity.
-   Most of the code is in forge-std folder inside the lib directory.

### Named Imports in Solidity

```
import {Script} from "forge-std/Script.sol";
import {SimpleStorage} from "../src/SimpleStorage.sol";
```

### Script

```
# runs on non persistant blockchain by default
forge script script/DeploySimpleStorage.s.sol

# dry-run, doesnt actually deploy to the network
forge script script/DeploySimpleStorage.s.sol --rpc-url http://127.0.0.1:8545

# Actual Transaction
forge script script/DeploySimpleStorage.s.sol --rpc-url http://127.0.0.1:8545 --broadcast --private-key 0x32432432432432432432

# in case there are two or more contracts in the same file.
forge script script/Interactions.s.sol:FundFundMe --rpc-url $MUMBAI_RPC_URL --broadcast --private-key $PRIVATE_KEY

```

#### Notes

-   create .env file
-   add PRIVTE_KEY and RPC_URL values to the .env file on the terminal
-   source .env - this will add the env varibale available to terminal
-   Test
-   echo $PRIVATE_KEY
-   echo $RPC_URL

```
# Rewriting the deploy script with env variables
forge script script/DeploySimpleStorage.s.sol --rpc-url $RPC_URL --broadcast --private-key $PRIVATE_KEY
```

### Misc

```
# Provides Test Coverage Report
forge coverage --fork-url $RPC_URL

# provides gas consumption for all tests
forge snapshot

# provide gas consumption of a specific test case
forge snapshot --mt TEST_FUNCTION_NAME

# provides storage layout of all storage variables
forge inspect CONTRACT_NAME storageLayout

```

## Cast

cast - is used for reading, writing trxs, typecasting and format conversion

### Import Private Keys Safely

EthSign was previously available solution

```
cast wallet import --interactive ACCOUNT_NAME - allowws to import and store private keys safely as keystores and access them with a password

cast wallet list - lists all wallets available
```

#### How to Use

```
# BEFORE
forge script script/DeploySimpleStorage.s.sol --rpc-url $RPC_URL --broadcast --private-key $PRIVATE_KEY

# AFTER

forge script script/DeploySimpleStorage.s.sol --rpc-url $RPC_URL --broadcast --account ACCOUNT_NAME
```

### Send

Send can be used to make contract function calls through commandline [For Write Transactions]

```
cast --help
cast send --help
cast send 0x0165878A594ca255338adfa4d48449f69242Eb8F "store(uint256)" 12 --rpc-url $RPC_URL --account one
```

### Call

Call is used to make contract function calls through commandline [For Read Transactions]

```
cast call --help
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "retrieve()" --rpc-url $RPC_URL
```

### Type Conversion

```
cast --to-base 0x000000000000000000000000000000000000000000000000000000000000007b dec
```

cast sig "fund()" => creates function selector for us

```
# displays the value stored in a specific storage slot
cast storage CONTRACT_ADDRESS STORAGE_SLOT_NUMBER

```

## Chisel

Allows users to write solidity on the terminal

```
chisel --help
```

## Foundry Cheatcodes

-   vm.startBroadcast()
-   vm.stopBroadcast()
-   vm.expectRevert()
-   vm.makeAddr("USERNAME")
-   vm.deal(userAddress,"ETHBALANCE")
-   vm.prank(userAddress)
-   vm.startPrank(userAddress)
-   vm.stopPrank()
-   vm.txGasPrice()

## Forge-Std

-   assertEq(PARAM1,PARAM2)
-   hoax() - combines vm.prank and vm.deal

### Notes

What can we do to work with addresses otuside our system?

1. Unit - Testing a specific part of our code
2. Integration - Testing how our code works with other parts of our code
3. Forked - Testing our code on a simulated real environment
4. Staging - Testing our code in a real environment that is not prod
