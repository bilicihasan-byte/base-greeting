// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title BaseGreeting
/// @author Hasan
/// @notice Basit bir "greeting" depolayıcısı; eğitim amaçlı.
contract BaseGreeting {
    address public owner;
    string private greeting;

    event GreetingChanged(address indexed who, string oldGreeting, string newGreeting);

    modifier onlyOwner() {
        require(msg.sender == owner, "sadece sahip");
        _;
    }

    constructor(string memory _init) {
        owner = msg.sender;
        greeting = _init;
    }

    function setGreeting(string calldata _g) external onlyOwner {
        string memory old = greeting;
        greeting = _g;
        emit GreetingChanged(msg.sender, old, _g);
    }

    function greet() external view returns (string memory) {
        return greeting;
    }

    function transferOwnership(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "gecersiz adres");
        owner = _newOwner;
    }
}
