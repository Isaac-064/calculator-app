import React, { useState } from 'react';

const CalculatorApp: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const result = eval(input);
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput(null);
    } else if (value === 'CE') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (value === 'AC') {
      setInput('');
      setOutput(null);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleScientificButtonClick = (func: string) => {
    setInput((prevInput) => prevInput + func);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '='].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleScientificButtonClick('Math.sqrt')}>√</button>
        <button className="CE" onClick={() => handleButtonClick('CE')}>CE</button>
        <button className="AC" onClick={() => handleButtonClick('AC')}>AC</button>
        <button onClick={() => handleScientificButtonClick('Math.log10')}>log</button>
        <button onClick={() => handleScientificButtonClick('Math.sin')}>sin</button>
        <button onClick={() => handleScientificButtonClick('Math.cos')}>cos</button>
        <button onClick={() => handleScientificButtonClick('Math.tan')}>tan</button>
        <button onClick={() => handleScientificButtonClick('Math.PI')}>π</button>
        <button onClick={() => handleScientificButtonClick('Math.E')}>e</button>
        <button onClick={() => handleScientificButtonClick('Math.pow')}>^</button>
        <button onClick={() => handleScientificButtonClick('(')}>(</button>
        <button onClick={() => handleScientificButtonClick(')')}>)</button>
        <button onClick={() => handleScientificButtonClick(',')}>,</button>
        <button onClick={() => handleScientificButtonClick('!')}>!</button>
        <button onClick={() => handleScientificButtonClick('%')}>%</button>
        <button onClick={() => handleScientificButtonClick('Math.abs')}>|x|</button>
      </div>
    </div>
  );
};

export default CalculatorApp;
