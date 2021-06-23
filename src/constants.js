import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/03672b06fd384bc4bd05af5e65c343e0')

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
})

// Address allowed to buy from you
const buyerAddress = "0x4a861fdbfff083b4c87be25ebba96c3751336e1d"

const listing = await seaport.createSellOrder({
  tokenAddress: "0x0b08af3b5a4877ae471342342743f7cb86db604b", // Decentraland
  tokenId: "231", // Token ID
  accountAddress: "0x2854d97fBfC296f53118270601f193aa77cf06da",
  startAmount: 0,
  buyerAddress
})
