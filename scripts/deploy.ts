import { ethers } from 'hardhat'

async function main() {
  const DAOIndexFund = await ethers.getContractFactory('DAOIndexFund')
  const daoIndexFund = await DAOIndexFund.deploy('Hello, Hardhat!')

  await daoIndexFund.deployed()

  console.log('DAO Index Fund deployed to:', daoIndexFund.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
