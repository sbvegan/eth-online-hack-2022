// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "./Store.sol";

contract StoreFactory {
    uint256 internal storeId;
    mapping(uint256 => Store) internal storeMapping;

    function createNewStore() public {
        Store store = new Store();
        storeMapping[storeId] = store;
        storeId++;
    }

    function getStoreId() public view returns(uint256) {
        return storeId;
    }
}