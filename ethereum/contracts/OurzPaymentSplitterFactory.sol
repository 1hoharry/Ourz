pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/payment/PaymentSplitter.sol";

contract OurzPaymentSplitterFactory {
    OurzPaymentSplitter[] public deployedOurzPaymentSplitters;
    mapping(address => OurzPaymentSplitter[]) private allPaymentSplittersOfCollaborator;

    function createOurzPaymentSplitter(address[] memory _payees, uint256[] memory _shares) public {
        OurzPaymentSplitter ourzPaymentSplitter = new OurzPaymentSplitter(_payees, _shares);
        deployedOurzPaymentSplitters.push(ourzPaymentSplitter);
        for (uint256 i = 0; i < _payees.length; i++) {
            allPaymentSplittersOfCollaborator[_payees[i]].push(ourzPaymentSplitter);
        }
    }

    function getOurzPaymentSplittersByCollaborator(address collaborator) public view returns (OurzPaymentSplitter[] memory) {
        return allPaymentSplittersOfCollaborator[collaborator];
    }
}

contract OurzPaymentSplitter is PaymentSplitter {
    constructor(address[] memory _payees, uint256[] memory _shares) PaymentSplitter(_payees, _shares) public {}
}