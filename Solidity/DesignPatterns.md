# Common Design Patterns in Solidity


1. Factory Pattern - Allows to create contract instances dynamically.
```
contract TokenFactory {
    address[] public deployedTokens;

    function createToken(string memory name, string memory symbol, uint8 decimals) public {
        address newToken = address(new Token(name, symbol, decimals));
        deployedTokens.push(newToken);
    }
}
```
2. Proxy Pattern - For Upgrading Contracts
```
contract Proxy {
    address public implementation;

    function upgradeImplementation(address newImplementation) public {
        implementation = newImplementation; 
    }

    fallback() external {
        // Forward function calls to the implementation contract
        (bool success, ) = implementation.delegatecall(msg.data);
        require(success, "Call to implementation failed");
    }
}
```
3. State Machine Pattern  - manage the state of a contract by defining a finite set of states and transitions between them
```
enum CampaignState { Open, Funded, Closed }

contract Crowdfunding {
    CampaignState public state;

    modifier inState(CampaignState requiredState) {
        require(state == requiredState, "Invalid state transition");
        _;
    }
    function startCampaign() public {
        require(state == CampaignState.Open, "Campaign is not open");
        // Initialize campaign
        state = CampaignState.Open;
    }
    function fundCampaign() public inState(CampaignState.Open) {
        // Accept contributions
        state = CampaignState.Funded;
    }
    function closeCampaign() public inState(CampaignState.Funded) {
        // Close the campaign and disburse funds
        state = CampaignState.Closed;
    }
}
```

4. Withdrawal Pattern - used to handle the secure withdrawal of funds from a contract. It prevents reentrancy attacks and ensures that funds are only withdrawn by authorized users.
```
contract Wallet {
    mapping(address => uint256) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value; 
    }

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
    }
}
```

5. Library Pattern - allows to organize and reuse code across multiple contracts. It’s ideal for encapsulating logic that can be shared among various contracts.

```
library MathUtils {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "Overflow detected");
        return c;
    }
}
```

6. 

