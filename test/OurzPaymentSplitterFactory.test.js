const OurzPaymentSplitterFactory = artifacts.require(
  "OurzPaymentSplitterFactory"
);

contract("OurzPaymentSplitterFactory", (accounts) => {
  let factory;

  before(async () => {
    factory = await OurzPaymentSplitterFactory.deployed();
  });

  it("should be deployed", async () => {
    const address = factory.address;
    assert.exists(address, "Address doesn't exist");
    assert.notEqual(address, "0x0", "Address cannot be 0x0");
    assert.notEqual(address, "", "Address cannot be empty");
  });

  it("should be able to create a paymentsplitter contract", async () => {
    await factory.createOurzPaymentSplitter([accounts[0]], [1]);
    const address = await factory.deployedOurzPaymentSplitters(0);
    assert.exists(address, "Address doesn't exist");
    assert.notEqual(address, "0x0", "Address cannot be 0x0");
    assert.notEqual(address, "", "Address cannot be empty");
  });

  it("should retrieve a list of paymentsplitter contracts for the specified address", async () => {
    await factory.createOurzPaymentSplitter([accounts[0]], [1]);
    const address = await factory.deployedOurzPaymentSplitters(0);
    const paymentSplitters = await factory.getOurzPaymentSplittersByCollaborator(
      accounts[0]
    );
    assert.equal(
      address,
      paymentSplitters[0],
      "The list of contracts is incorrect."
    );
  });
});
