
const {ethers} = require('hardhat')

async function main (){

    const contract = await ethers.getContractFactory("NFTcontract")

    const deployedContract = await contract.deploy()

    await deployedContract.deployed()

    console.log(`NFT contract deployed to : ${deployedContract.address}`)
}



const start = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
     console.log(error)   
     process.exit(1)
    }
}

start()