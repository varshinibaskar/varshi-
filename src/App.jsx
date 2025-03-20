import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Calculator Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-sm">
          <input
            type="text"
            value={input}
            disabled
            className="w-full text-3xl p-3 bg-gray-700 text-white rounded-lg mb-4"
          />
          <div className="text-2xl text-white mb-4">{result}</div>
          <div className="grid grid-cols-4 gap-4">
            {[...'789/', '456*', '123-', '0.C+='].map((row, rowIndex) => (
              row.split('').map((char, index) => (
                <button
                  key={`${rowIndex}-${index}`}
                  onClick={() => handleClick(char)}
                  className="bg-gray-600 hover:bg-gray-500 text-white text-xl font-bold py-4 rounded-lg"
                >
                  {char}
                </button>
              ))
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="w-full md:w-1/2 h-full">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/V7Ad3uNJRvSLQdSOrxvpP"
          width="100%"
          style={{ height: '100%', minHeight: '700px' }}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default App;
