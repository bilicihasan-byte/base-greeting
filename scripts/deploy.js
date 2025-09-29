async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const BaseGreeting = await ethers.getContractFactory("BaseGreeting");
  const greeter = await BaseGreeting.deploy("Günaydın Base!");
  await greeter.deployed();

  console.log("BaseGreeting deployed to:", greeter.address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
