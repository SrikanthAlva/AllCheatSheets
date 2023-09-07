forge --version
cast --version
anvil --version
chisel --version

anvil - starts local blockchain [persistant]

forge init - to create a foundry project

forge install smartcontractkit/chainlink-brownie-contracts@0.6.1 --no-commit

```
forge --help
forge create --help
forge compile
forge create SimpleStorage --interactive [provides option to enter private key] [deploys to non persistant blockchain by default]
forge create SimpleStorage --private-key 0x32432432432432432432 [deploys to anvil local blockchain by default]
forge create SimpleStorage --rpc-url http://127.0.0.1:8545 --private-key 0x32432432432432432432 [deploys to the network specified]
```

```
forge script script/DeploySimpleStorage.s.sol 
forge script script/DeploySimpleStorage.s.sol --rpc-url http://127.0.0.1:8545 [dry-run]
forge script script/DeploySimpleStorage.s.sol --rpc-url http://127.0.0.1:8545 --broadcast  --private-key 0x32432432432432432432 [Actual Transaction]

cast - is used for reading, writing trxs, typecasting and format conversion
```
-------------

create .evn file 
add PRIVTE_KEY and RPC_URL values to the .env file
on the terminal
source .env - this will add the env varibale available to terminal
Test
echo $PRIVATE_KEY
echo $RPC_URL
-------------

Rewriting the deploy script with env variables

forge script script/DeploySimpleStorage.s.sol --rpc-url $RPC_URL --broadcast  --private-key $PRIVATE_KEY

-------------

cast --help
cast send --help
cast send 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "store(uint256)" 123 --rpc-url $RPC_URL --private-key $PRIVATE_KEY [For Write Transactions]


cast call --help
cast call 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 "retrieve()" --rpc-url $RPC_URL
cast --to-base 0x000000000000000000000000000000000000000000000000000000000000007b dec
cast sig "fund()" => creates function selector for us

-------------
source .env
forge script script/DeploySimpleStorage.s.sol --rpc-url $MUMBAI_RPC_URL --broadcast  --private-key $PRIVATE_KEY
-------------

forge fmt - formats all solidity files in the project.

forge compile - compiles contracts
forge test - compiles and runs tests
forge test -vv - prints console.log values in tests
forge test -vvv - more v, gives a level deeper stack trace
forge test --mt TEST_FUNCTION_NAME - test a specific function in the test suit
forge test -imt TEST_FUNCTION_NAME --fork-url $RPC_URL -vvv - to test on the forked anvil chain

forge coverage --fork-url $RPC_URL

forge snapshot --mt TEST_FUNCTION_NAME provide gas consumption of a specific test case
forge inspect CONTRACT_NAME storageLayout provides storage layout of all storage variables

cast storage CONTRACT_ADDRESS STORAGE_SLOT_NUMBER - displays the value stored in the storage slot.


forge install Cyfrin/foundry-devops --no-commit

forge script script/Interactions.s.sol:FundFundMe --rpc-url $MUMBAI_RPC_URL --broadcast  --private-key $PRIVATE_KEY - in case there are two or more contracts in the same file.

ALT + Z for Toggle Wordwrap


### What can we do to work with addresses otuside our system?
1. Unit - Testing a specific part of our code
2. Integration - Testing how our code works with other parts of our code
3. Forked - Testing our code on a simulated real environment
4. Staging - Testing our code in a real environment that is not prod

### Order of writing code in solidity
0. License
1. Pragma
2. Imports
3. Errors
3. Interfaces, Libraries, Contracts
4. ----Inside Contracts----
5. Type Declarations
6. State variables
7. Events
8. Modifiers
9. ----Functions Order----
10. constructor
11. receive
12. fallback
13. external
14. public
15. internal
16. private
17. view / pure

- Layout of Contract:
- version
- imports
- errors
- interfaces, libraries, contracts
- Type declarations
- State variables
- Events
- Modifiers
- Functions- 
- Layout of Functions:
- constructor
- receive function (if exists)
- fallback function (if exists)
- external
- public
- internal
- private
- internal & private view & pure functions
- external & public view & pure functions


## Makefile

Is typically used to write short forms for really long scripts

-include .env will import from environment file

:; for single line command

: for multi line commands

.PHONY: all test clean ... => Indicates these keywords are not folders

DEFAULT_ANVIL_KEY => Default Anvil Private Jey set Up

make help => for creating custom help commands

```
all: clean remove install update build

will clean repo, remove git modules, install dependciest, update forge and build
```  
