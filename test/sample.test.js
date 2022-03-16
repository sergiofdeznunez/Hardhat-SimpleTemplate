const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Logic testing ", function () {

    let proxy , owner, signers;

    before (async () => {
        signers = await ethers.getSigners();
        owner = await signers[0].getAddress();
    });
  
    this.beforeAll(async function() {
      
      const Proxy = await hre.ethers.getContractFactory("FactoryProxy");
      proxy = await Proxy.deploy()
      await proxy.deployed()
  
    });
  
  
  it("", async function () {
      
        /*TESTS GO HERE*/
  });

});