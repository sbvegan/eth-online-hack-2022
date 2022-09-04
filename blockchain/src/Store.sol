// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

// todo: contract should be ownable

contract Store {
    uint256 invoiceId;
    struct invoice {
        uint256 amount;
        bool paid;
    }
    mapping(uint256 => invoice) invoices;

    event InvoiceCreated(uint256 indexed id, uint256 amount);
    event InvoicePaid(uint256 indexed id);

    // maybe declare store name
    // constructor() {}

    // todo: create invoice
    // todo: take invoice payment
    // todo: withdraw funds

}