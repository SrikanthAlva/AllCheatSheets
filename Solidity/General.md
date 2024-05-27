# Solidity General Tips

## Order of writing code in solidity

0. License
1. Pragma
2. Imports
3. Errors
4. Interfaces, Libraries, Contracts
5. ----Inside Contracts----
6. Type Declarations
7. State variables
8. Events
9. Modifiers
10. ----Functions Order----
11. constructor
12. receive
13. fallback
14. external
15. public
16. internal
17. private
18. view / pure

-   Layout of Contract:
-   version
-   imports
-   errors
-   interfaces, libraries, contracts
-   Type declarations
-   State variables
-   Events
-   Modifiers
-   Functions-
-   Layout of Functions:
-   constructor
-   receive function (if exists)
-   fallback function (if exists)
-   external
-   public
-   internal
-   private
-   internal & private view & pure functions
-   external & public view & pure functions

## CEI

CEI - Checks Effects and Interactions
