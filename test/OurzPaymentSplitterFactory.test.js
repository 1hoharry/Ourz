const OurzPaymentSplitterFactory = artifacts.require(
  "OurzPaymentSplitterFactory"
);

contract("OurzPaymentSplitterFactory", (accounts) => {
  let factory;

  beforeEach(async () => {
    factory = await OurzPaymentSplitterFactory.new();
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
    await factory.createOurzPaymentSplitter(
      [accounts[0], accounts[1], accounts[2]],
      [1, 1, 1]
    );
    const address = await factory.deployedOurzPaymentSplitters(0);
    const paymentSplitters1 = await factory.getOurzPaymentSplittersByCollaborator(
      accounts[0]
    );
    const paymentSplitters2 = await factory.getOurzPaymentSplittersByCollaborator(
      accounts[1]
    );
    const paymentSplitters3 = await factory.getOurzPaymentSplittersByCollaborator(
      accounts[2]
    );

    assert.equal(
      address,
      paymentSplitters1[0],
      "The list of contracts is incorrect1."
    );
    assert.equal(
      address,
      paymentSplitters2[0],
      "The list of contracts is incorrect2."
    );
    assert.equal(
      address,
      paymentSplitters3[0],
      "The list of contracts is incorrect3."
    );
  });
});
