# Base Greeting

Bu proje Base ağı üzerinde çalışan basit bir akıllı sözleşme örneğidir.

## Kurulum
```bash
npm install
npx hardhat test
```

## Deploy
`.env` dosyasına `DEPLOYER_KEY` ve `BASE_RPC` koyun.
```bash
npx hardhat run scripts/deploy.js --network base
```
