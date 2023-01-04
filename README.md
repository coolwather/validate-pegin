# Project to test PegIn with a Smart Contract

Installing packages
    npm install

## Deploying the contract

you need to have your RSKJ or PowPeg application running in your localhost
Then run

    npm run deploy-regtest

this command will return the address of the contract deployed in your localhost.
Inside the folder **scripts/ValidatePegin.ts** replace the contractAdrress variable with the address received in the first command.
Then run the script to check the contract balance.

    npm run test-pegin

## Doing the pegin
You need to do the pegin change the input parameters in the pegin request.
- **callContractAddress** and **rskRefundAddress** with the address of the deployed contract.

After you deposite the bitcoin in the **bitcoinDepositAddressHash** received in the accept quote you can now check the balance again.

    npm run test-pegin

The new balance should be the balance before the pegin + quote.value.