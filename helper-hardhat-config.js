const { ethers } = require("hardhat")

const networkConfig = {
    43113: {
        name: "fuji",
        vrfCoordinatorV2: 0x2ed832ba664535e5886b75d64c46eb9a228c2610,
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f61",
        subscriptionId: "0",
        callbackGasLimit: "500000", //500K
        interval: "30",
    },
    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f61", //Aquí no importa qué se ponga para el mock
        interval: "30",
    },
}

const developmentChains = ["hardhat", "localhost"]
module.exports = { networkConfig, developmentChains }
