const { expect } = require("chai");

describe("BaseGreeting", function () {
  it("should set initial greeting and allow owner to change", async function () {
    const [owner, other] = await ethers.getSigners();
    const BG = await ethers.getContractFactory("BaseGreeting");
    const greeter = await BG.deploy("Merhaba");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Merhaba");

    await greeter.setGreeting("Yeni selam");
    expect(await greeter.greet()).to.equal("Yeni selam");

    await expect(greeter.connect(other).setGreeting("hack")).to.be.reverted;
  });
});
