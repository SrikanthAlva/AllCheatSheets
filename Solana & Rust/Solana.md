# Solana

Advantages

-   Fast Confiration Time
-   Low Transaction Fees

-   Execute Programs in Parallel

Turbine is used for block propogation

Accounts

-   Everthing is an account on Solana
-   Unique 256-bit address
-   Hold some balance of SOL
-   Can store arbitrary data
-   data storage is paid with Rent
-   anyone can `credit` SOL to an account or read `data`
-   only the accounts owner can `debit` SOL or modify `data`

```
{
    key: number, // address of the account
    lamports: number,
    data: Unit8Array,
    is_executable: boolean, // Is the data a program?
    owner: PublicKey // the program with write access
}

```

## Programs

-   Special kind of account
-   Data is eBPF bytecode
-   Programs can be written in Rust,C,C++,Python

---

-   Programs are stateless: they read & write data to other accounts. This allows programs to be executed in parallel
-   Must be the `owner` of the account to modify
-   Programs process instructions
-   Programs can send intructions to other programs

## Program Instructions

```
{
    program_id: number,
    keys: Array<{
        key: PublicKey,
        is_mutable: boolean,
        is_signer: boolean
    }>,
    data: Uint8Array, // Action + args
}
```

## Solana Transactions

Transaction ==> RPC Client ==> Network

## Transaction

```
{
    message: {instructions: Array<Instruction>,
    recent_blockhash: number,
    fee_payer: PublicKey,
    ...
    },
    signers: Array<Uint8Array>,
}
```



---

npm install @solana/web3.js

ETH: WEI :: SOL:LAMPORT

Accounts store tokens, NFTs, programs, and data

Addresses point to accounts on the Solana network. Anyone can read the data in a given address. Most addresses are also public keys.

## Accounts

All data stored on Solana is stored in accounts. Accounts can store:

-   SOL
-   Other tokens, like USDC
-   NFTs
-   Programs, like the film review program we make in this course!
-   Program data, like a film review for the program above!

SOL is sometimes shown as ◎ Symbol

1 SOL = 1 Billion Lamports = 1_000_000_000 Lamports

## Addresses

Addresses uniquely identify accounts. Addresses are often shown as base-58 encoded strings like dDCQNnDmNbFVi8cQhKAgXhyhXeJ625tvwsunRyRc7c8. Most addresses on Solana are also public keys

EOA:CA::Non Executable Accounts:Executable Accounts

Native Instructions

Non Native Instructions

Program Instruction Logs : Event Logs
