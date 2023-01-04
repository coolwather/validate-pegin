// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract PeginTest {
    event Received(address, uint);
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}
