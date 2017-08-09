import React from 'react';
import './Instructions.css';

const Instructions = () => (
    <div className="instructions">
        <h3 className="instructions__title">Instructions</h3>
        <h4>Goal</h4>
        <p>The goal of the game is to acquire the most points at the end of four generations of dogs.</p>
        <h4>Order of Turn</h4>
        <p>Each round consists of </p>
        <h5>Phase 1: Create generation</h5>
        <p>Four new puppies are born each generation.  Their stats are rolled randomly, with any modifiers from their parents applied.</p>
        <h5>Phase 2: Train your puppies</h5>
        <p>Each player rolls a die to determine the order of play; highest roll goes first, followed by the next highest, and so on.</p>
        <p>Starting with the first player, each player places one dog in the training area of their choosing.  Each training area focuses on a particular stat, though the effects can be positive or negative or even affect other stats as well.</p>
    </div>
);

export default Instructions;