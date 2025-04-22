import dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();

//Conectando a mainnet eth com o alchemy provider
const provider = new ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${process.env.API_KEY_MAIN_NETWORK}`)
console.log(provider)

async function main(){

    const network = await provider.getNetwork()
    console.log("network", network)

    const blockNumber = await provider.getBlockNumber()
    console.log("Block Number:", blockNumber)

    //Pegando o balance da carteira 
    const balance = await provider.getBalance('0x4F71d83aECac578d3280D0a5C3D074A9B35D67c3')

    //formatando para tirar de BigNumber
    console.log("balance: ", ethers.formatEther(balance))
}

main();