rm -rf ./memberships/v1/abi &&
cp -r ../lazy-minting-contracts/contracts/abi ./memberships/v1/abi &&
rm -rf ./memberships/v1/contracts && 
npx typechain --target ethers-v5 --out-dir ./memberships/v1/contracts ./memberships/v1/abi/**/*.json

