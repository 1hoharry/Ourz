const OurzPaymentSplitterFactory = artifacts.require(
  "OurzPaymentSplitterFactory"
);

module.exports = function (deployer) {
  deployer.deploy(OurzPaymentSplitterFactory);
};