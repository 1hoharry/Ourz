const BaseErc20 = artifacts.require(
    "BaseErc20"
  );

const Decimal = artifacts.require(
    "Decimal"
  );

const ERC721 = artifacts.require(
    "ERC721"
  );

const Math = artifacts.require(
    "Math"
  );

module.exports = function (deployer) {
    deployer.deploy(BaseErc20, "Zora", "ZORA", 18);
    deployer.deploy(Decimal);
    deployer.deploy(ERC721, "Zora", "ZORA");
    deployer.deploy(Math);
  };