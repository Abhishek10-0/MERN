import React, { useState } from 'react';

function App() {

  const generateNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(generateNumber);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");


  const handleGuess = () => {
    if (guess < 1 || guess > 100) {
      setMessage("Please guess a number between 1 and 100.");
      return;
    }

    setAttempts(attempts + 1);
    if (guess < randomNumber) {
      setMessage("Too low! Try again.");
    } else if (guess > randomNumber) {
      setMessage("Too high! Try again.");
    } else {
      setMessage(`Correct! You guessed it in ${attempts + 1} attempts.`);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen flex justify-center items-center">
      <div className="bg-gray-500 p-6 rounded-lg shadow-xl flex flex-col items-center w-80">
        <h1 className="text-2xl font-semibold text-white mb-4">Number Guessing Game</h1>
        <input 
          type="number"
          value={guess}
          placeholder="Enter Number between 1 and 100"
          onChange={(e) => setGuess(e.target.value)}
          className="p-2 mb-4 rounded-md border-2 border-gray-300 focus:outline-none"
        />
        <button 
          onClick={handleGuess}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mb-4"
        >
          Guess
        </button>
        <p className="text-lg font-medium text-white">{message}</p>
        <p className="text-white mt-2">Attempts: {attempts}</p>
      </div>
    </div>
  );
}

export default App;
