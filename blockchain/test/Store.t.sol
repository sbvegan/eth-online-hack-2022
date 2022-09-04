// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/StoreFactory.sol";

contract StoreTest is Test {
    StoreFactory public storeFactory;
    function setUp() public {
       storeFactory = new StoreFactory();
    }

    function testCreateStore() public {
        uint256 idBefore = storeFactory.getStoreId();
        storeFactory.CreateNewStore();
        uint256 idAfter = storeFactory.getStoreId();
    }
}
