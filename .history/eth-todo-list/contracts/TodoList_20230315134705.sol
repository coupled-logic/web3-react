pragma solidity ^0.5.0;

contract TodoList {
    uint taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }
}