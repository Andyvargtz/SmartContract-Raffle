const { ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config.js")

const BASE_FEE = ethers.utils.parseEther("0.005") // 0.005 LINK per request
const GAS_PRICE_LINK = 1e9 //Calculated Value on the gas price of the chain

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("Local Network detected! deploying mocks...")
        //Deploy a moc for the VRF Coordinator
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            args: args,
            log: true,
            waitConfirmations: network.config.blockConfirmations || 1,
        })
        log("Mocks Deployed")
        log("---------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
