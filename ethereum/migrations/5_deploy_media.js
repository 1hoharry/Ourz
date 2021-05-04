const Media = artifacts.require(
    "Media"
  );

const Market = artifacts.require(
    "Market"
  );
  
  module.exports = function (deployer) {
    //const marketContract = '0x82a830ba11cA1A3aeA46d329879e3E80C0891e9d'; //Media.sol(marketContract)
    deployer.deploy(Media, '0x8E6382316e4206a6c3Aa1Ec9Eb0F251D278D2B66');
  };